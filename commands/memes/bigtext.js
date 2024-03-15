const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const BigtextFolderPath = '/home/funtimes909/Documents/Memes/Funny 3D Text';
const commandName = "/bigtext"

function RandomFile() { // Function to generate a random 3D Text meme from the memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bigtext')
		.setDescription('Sends a random 3D text meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(BigtextFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(BigtextFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
        }
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		const channelName = interaction.channel.name
		const date = new Date
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		console.log("[COMMAND_EXECUTED] " + `[${hours}:${minutes}] ` + userId + " ran " + commandName + " in #" + channelName + " in " + guildName + ` [${filePath}]`)
        },
    }
