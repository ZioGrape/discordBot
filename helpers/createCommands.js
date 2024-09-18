const { DiscordRequest } = require('./utils.js');

async function createCommand() {
  const appId = process.env.APP_ID;

  /**
   * Globally-scoped slash commands (generally only recommended for production)
   * See https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
   */
  const globalEndpoint = `applications/${appId}/commands`;

  /**
   * Guild-scoped slash commands
   * See https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
   */
  // const guildEndpoint = `applications/${appId}/guilds/<your guild id>/commands`;
  const commandBody = {
    name: 'test',
    description: 'Just your average command',
    // chat command (see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types)
    type: 1,
  };
  const echoCommand = {
    name: 'echo',
    description: 'my first',
    // chat command (see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types)
    type: 1,
  };

  try {
    await DiscordRequest(globalEndpoint, {
      method: 'POST',
      body: commandBody,
    });
    await DiscordRequest(globalEndpoint, {
      method: 'POST',
      body: echoCommand,
    });
  } catch (err) {
    console.error('Error installing commands: ', err);
  }
}

module.exports = createCommand;
