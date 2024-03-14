const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const BrianFolderPath = '/home/funtimes909/Documents/Memes/Bad Luck Brian';
const commandName = "/brian"

function RandomFile() { // Function to generate a random bad luck brian meme from the memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brian')
		.setDescription('Sends a random bad luck brian meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(BrianFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(BrianFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
        }
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		console.log("[COMMAND_EXECUTED] " + userId + " ran " + commandName + " in " + guildName + `[VALUE] ${filePath}`)
        },
    }
