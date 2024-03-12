const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const memeFolderPath = '/home/funtimes909/Documents/Memes/';

function RandomFile() { // Function to generate a random meme from the memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Sends a random meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(memeFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(memeFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log('There was an error running the Meme command!')
        }
        },
    }