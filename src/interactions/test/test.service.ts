import { CommandInteraction, EmbedBuilder } from "discord.js";

// Example Service for commands

export class TestService {
  readonly interaction: CommandInteraction;

  constructor(interaction: CommandInteraction) {
    this.interaction = interaction;
  }

  async generateEmbed() {
    const embed = new EmbedBuilder()
      .setTitle("Проверка работы бота")
      .setDescription('Testing bot');
    return await this.interaction.reply({ embeds: [embed] });
  }

  private calculateMessagePing() {
    return Math.floor((Date.now() - this.interaction.createdTimestamp) / 1000);
  }

  
}
