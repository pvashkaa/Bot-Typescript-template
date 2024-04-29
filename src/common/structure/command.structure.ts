import {
  AutocompleteInteraction,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export abstract class SlashCommandStructure {
  readonly data: SlashCommandBuilder;

  protected constructor(data: SlashCommandBuilder) {
    this.data = data;
  }

  abstract execute(interaction: CommandInteraction): any;

  abstract autoComplete?(interaction: AutocompleteInteraction | any): any;
}
