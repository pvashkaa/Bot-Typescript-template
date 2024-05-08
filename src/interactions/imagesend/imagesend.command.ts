import {
    SlashCommandBuilder,
    CommandInteraction,
  } from "discord.js";
  import { SlashCommandStructure } from "../../common/structure/command.structure";
  import { Imageservice } from "./imagesend.service";
  
  export class Image implements SlashCommandStructure {
    data: any;


    constructor() {
        this.data = new SlashCommandBuilder()
          .setName("image")
          .setDescription("Отправляет фотографию указанную вами")
          .addAttachmentOption((option) =>
        option.setName(`картинка`).setDescription(`user`).setRequired(true)
      );
          
      }
    
      async execute(interaction: CommandInteraction) {
        const pingService = new Imageservice (interaction); 
    
        return pingService.generateEmbed(); 
      }
    }






