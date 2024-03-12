const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const ChristmasFolderPath = '/home/funtimes909/Documents/Memes/Christmas Gifs';

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
            console.log('rah')
        }
        },
    }
