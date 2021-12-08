const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");
const eventFiles = fs.readdirSync("./src/events");

//Playing	0, Streaming   1 Listening	2, Watching	3, Custom	4, Competing	5,
client.on('ready', () => {
    console.log(`The bot is online!`);
    client.user.setPresence({ activities: [{ type: 3, name: 'Muxic' }], status: 'dnd' });
});

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");

    client.login(process.env.token);
})();
