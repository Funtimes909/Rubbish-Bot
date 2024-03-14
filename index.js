// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const { Activity } = require('discord.js');
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	const watching = ["Helluva Boss", "Hazbin Hotel", "Breaking Bad", "Better Call Saul", "Stranger Things"]
	const playing = ["Minecraft", "Project Zomboid", "ULTRAKILL", "Windows 95", "Windows XP", "Among Us", "OMORI"]
	const listening = ["Arcade Fire", "Daft Punk", "Waterflame", "Queen", "Keygen Church"]
	const currentStatus = (Math.trunc(Math.random() * 3))
	console.log(currentStatus)
	if (currentStatus == 1) {
		const Activity = "Watching"
	}
	else if (currentStatus == 2) {
		const Activity = "Playing"
	}
	else if (currentStatus == 3) {
		const Activity = "Listening"
	}
	else {
		const Activity = "Playing"
	}
	client.user.setActivity('Helluva Boss', { type: ActivityType.Activity });
	client.user.setStatus('dnd');
});

// Log in to Discord with your client's token
client.login(token);
client.commands = new Collection();

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}