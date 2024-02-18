import { Client, Events, GatewayIntentBits } from "discord.js";
import { generate } from "./api/janitor";
import { commands } from "./commands";

export const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.login(import.meta.env.VITE_BOT_TOKEN);

client.once(Events.ClientReady, (client) => {
  console.log(`${client.user.displayName} is now online!`);
});

// Register Slash Commands
client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) return;

  command.execute(interaction);
});
