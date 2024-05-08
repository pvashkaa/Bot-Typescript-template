import { CommandInteraction, EmbedBuilder } from "discord.js";

// Example Service for commands

export class Imageservice {
  readonly interaction: CommandInteraction;

  constructor(interaction: CommandInteraction) {
    this.interaction = interaction;
  }



  async generateEmbed() {
    const image = this.interaction.options.get("картинка")?.attachment?.url as string;
    const embed = new EmbedBuilder()
      .setImage(image)
      .setTitle("Проверка работы бота")
      .setDescription('Testing bot');
    return await this.interaction.reply({ embeds: [embed] });
  }


}
