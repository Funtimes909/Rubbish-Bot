const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const CatFolderPath = '/home/funtimes909/Documents/Memes/Cat Memes';
const CommandName = "CatMeme";

function RandomFile() { // Function to generate a random cat meme from the memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Sends a random cat meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(CatFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(CatFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log('There was an error running the ${CommandName} command!')
        }
        },
    }
