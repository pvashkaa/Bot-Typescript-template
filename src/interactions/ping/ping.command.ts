import {
  SlashCommandBuilder,
  CommandInteraction,
} from "discord.js";
import { SlashCommandStructure } from "@structures/command.structure";
import { PingService } from "./ping.service";
import { UseGuard } from "@decorators/permissions.decorator";
import { PingPermission } from "@configs/real/permissions.config";

export class Ping implements SlashCommandStructure {
  data: SlashCommandBuilder;

  constructor() {
    this.data = new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Пинг бота");
  }

  @UseGuard(PingPermission)
  async execute(interaction: CommandInteraction) {
    const pingService = new PingService(interaction); 

    return pingService.generateEmbed(); 
  }
}
