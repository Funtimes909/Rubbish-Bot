const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const ChristmasFolderPath = '/home/funtimes909/Documents/Memes/Christmas Gifs';
const commandName = "/jolly"

function RandomFile() { // Function to generate a random christmas meme from the memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jolly')
		.setDescription('Sends a random christmas meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(ChristmasFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(ChristmasFolderPath, randomFile);
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
