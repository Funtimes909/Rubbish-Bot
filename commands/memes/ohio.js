const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const OhioFolderPath = '/home/funtimes909/Documents/Memes/Memes Made in Ohio';

function RandomFile() { // Function to generate a random ohio meme from the ohio memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ohio')
		.setDescription('Sends a random ohio meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(OhioFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(OhioFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log('rah')
        }
        },
    }
