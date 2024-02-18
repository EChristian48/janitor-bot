import { generate } from "@/api/janitor";
import { SlashCommandBuilder } from "discord.js";
import { debounce } from "lodash";
import { ImportedSlashCommand } from "..";

export const data = new SlashCommandBuilder()
  .setName("chat")
  .setDescription("Chat with the bot")
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("What you say to the bot")
      .setRequired(true)
      .setMaxLength(3000)
  );

export const execute: ImportedSlashCommand["execute"] = async (interaction) => {
  const message = interaction.options.getString("message") ?? "";

  await interaction.reply(`${interaction.user.displayName} said: ${message}`);
  const botMessage = await interaction.followUp("Aqua says: ");

  try {
    await generate.generateMessage(message, {
      onMessage: async (message) => {
        await botMessage.edit("Aqua says: " + message);
      },
    });
  } catch (e) {
    console.log(e);
  }
};
