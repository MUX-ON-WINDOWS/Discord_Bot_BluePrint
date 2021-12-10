const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
<<<<<<< HEAD
// const keepAlive = require('./server.js')
// keepAlive();
=======
const keepAlive = require('./server.js');
keepAlive();
>>>>>>> 75c73ea8639dcb739595f338a3825250076187ed


client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");
const eventFiles = fs.readdirSync("./src/events");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token);
    client.dbLogin();
})();
