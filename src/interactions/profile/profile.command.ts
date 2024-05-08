import {
    SlashCommandBuilder,
    CommandInteraction,
  } from "discord.js";
  import { SlashCommandStructure } from "../../common/structure/command.structure";
  import { profileservice } from "./profile.service";
  
  export class Ping implements SlashCommandStructure {
    data: SlashCommandBuilder;
  
    constructor() {
      this.data = new SlashCommandBuilder()
        .setName("balance")
        .setDescription("Ваш баланс");
    }
  
    async execute(interaction: CommandInteraction) {
      const service = new profileservice(interaction); 
  
      return service.getBalance(); 
    }
  }