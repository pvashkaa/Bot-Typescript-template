import {
  CommandInteraction,
  EmbedBuilder,
  InteractionResponse,
} from "discord.js";
import mongoose from "mongoose";
import { defaultColours } from "@constants";

// Example Service for commands

export class PingService {
  readonly interaction: CommandInteraction;

  constructor(interaction: CommandInteraction) {
    this.interaction = interaction;
  }

  async generateEmbed(): Promise<InteractionResponse> {
    const embed = new EmbedBuilder()
      .setTitle("Проверка задержки бота")
      .setColor(defaultColours.baseEmbed)
      .addFields(
        {
          name: "Задержка сообщений",
          value: `> ${String(this.calculateMessagePing())}ms`,
          inline: true,
        },
        {
          name: "Задержка вебсокета",
          value: `> ${this.interaction.client.ws.ping}`,
          inline: true,
        },
        {
          name: "Задержка базы данных",
          value: `${await this.calculateDbPing()}ms`,
          inline: true,
        }
      );
    return await this.interaction.reply({ embeds: [embed] });
  }

  private calculateMessagePing(): number {
    return Math.floor((Date.now() - this.interaction.createdTimestamp) / 1000);
  }

  private async calculateDbPing(): Promise<number> {
    const start = Date.now();
    await mongoose.connect(
      process.env.DB_URI || "mongodb://127.0.0.1:27017/",
      {}
    );
    return Math.floor((Date.now() - start) / 1000);
  }
}
