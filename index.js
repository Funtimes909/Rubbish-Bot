const { Client, Collection, Events, GatewayIntentBits, ActivityType, Activity } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function ChangeStatus() {
	const status = {
		Watching: ["Helluva Boss", "Hazbin Hotel", "Breaking Bad", "Better Call Saul", "Stranger Things", "The world burn", "The Walking Dead", "Brodie Robertson", "Doctor Who", "Skibidi Toilet", "Coraline", "Red Hat Enterprise Linux", "YOU", "Matt Patts Final Theory"],
		Playing: ["Minecraft", "Project Zomboid", "ULTRAKILL", "Windows 95", "Windows XP", "Among Us", "OMORI", "Wikipedia", "Visual Studio Code", "Linux", "Firefox", "Hello Kitty Island Adventure", "Vencord", "RDR2", "Lethal Company", "/home/funtimes909/", "Gacha Life", "Muse Dash","DDLC", "Genshin Impact", "rm -rf /", "Project Sekai", "Valheim", "Celeste", "UNDERTALE", "Subnautica"],
		Listening: ["Arcade Fire", "Daft Punk", "Waterflame", "Queen", "Keygen Church", "Tally Hall", "Heaven Pierce Her", "100 Gecs", "Doctor Who Theme", "Skibidi Toilet Phonk", "Odetari", "TV Girl", "Crazy Little Thing Called Love", "Lethal Company Delivery Music", "Nimbasa Core", "MrKitty"]}
		const keys = Object.keys(status)
		const type = keys[(Math.trunc(Math.random() * keys.length))]
		const items = status[type]
		const currentStatus = items[(Math.trunc(Math.random() * items.length))]
	if (type == "Listening") {
		client.user.setActivity(currentStatus, { type: ActivityType.Listening });
	}
	else if (type == "Playing") {
		client.user.setActivity(currentStatus, { type: ActivityType.Playing });
	}
	else {
		client.user.setActivity(currentStatus, { type: ActivityType.Watching });
	}
	console.log(`[BOT_STATUS] Bot status has been set to [${type}] [${currentStatus}]`)
	setInterval(ChangeStatus, 300000)
}

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	ChangeStatus()
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