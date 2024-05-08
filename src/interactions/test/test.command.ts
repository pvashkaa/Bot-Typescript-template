import {
    SlashCommandBuilder,
    CommandInteraction,
  } from "discord.js";
  import { SlashCommandStructure } from "../../common/structure/command.structure";
  import { TestService } from "./test.service";
  
  export class Test implements SlashCommandStructure {
    data: SlashCommandBuilder;
  
    constructor() {
      this.data = new SlashCommandBuilder()
        .setName("test")
        .setDescription("Тестировка бота");
    }
  
    async execute(interaction: CommandInteraction) {
      const pingService = new TestService(interaction); 
  
      return pingService.generateEmbed(); 
    }
  }