import { UserModel } from "./models/user.model";
import { config } from "dotenv";
import { Client, Collection, GatewayIntentBits, ActivityType, GuildMember } from "discord.js"; // Добавлен импорт ActivityType
import EventHandlerService from "./events/system/collectors/event.collector";
import {
  Button,
  SlashCommand,
  CustomId,
} from "./base.types";
import mongoose from "mongoose";
config();

declare module "discord.js" {
  export interface Client {
    commands?: Collection<string, SlashCommand>;
    buttons?: Collection<CustomId, Button>;
  }
} 


const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildVoiceStates,
]; // обычный массив интентов


const client: Client = new Client({ intents: intents }); 

client.commands = new Collection<string, SlashCommand>(); 
client.buttons = new Collection<CustomId, Button>(); 
new EventHandlerService(client); 

client.once("ready", async () => {


  console.log("Bot is ready!");
  client.user?.setActivity('.help', { type: ActivityType.Listening }); 
await mongoose.connect(
    process.env.MIGRATE_MONGO_URI || "mongodb://127.0.0.1:27017/",
    {
      autoCreate: false, 
      bufferCommands: true
    }
  );
  const guilds = await client.guilds.fetch();
  guilds.map(async (guild: any): Promise<any> => {
  const members = await guild.members;
  if (members.length < 1) return;
  members.map(async (member: GuildMember): Promise<any> => {
    if (member.user.bot) {

      return null;
    }

    const userFromDb = await UserModel.findOne({
      guildId: guild.id,
      userId: member.user.id,
    });
    if (!userFromDb) {
      await UserModel.create({
        userId: member.user.id,
        guildId: guild.id,
      });
    }
  });
});
});

client.login(process.env.TOKEN);