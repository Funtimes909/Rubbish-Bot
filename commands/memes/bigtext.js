const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const BigtextFolderPath = '/home/funtimes909/Documents/Memes/Funny 3D Text';

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
            console.log('rah')
        }
        },
    }
