const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const MrbeastFolderPath = '/home/funtimes909/Documents/Memes/Mr Beastified YouTube';

function RandomFile() { // Function to generate a random mr beast reacts meme from the mrbeast memes folder, call before replying to always generate a fresh one
    randomFile = (Math.floor(Math.random() * files.length))
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mrbeast')
		.setDescription('Sends a random mr beast reacts meme from amys memes folder'),
	async execute(interaction) {
		const files = fs.readdirSync(MrbeastFolderPath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(MrbeastFolderPath, randomFile);
        try {
		await interaction.reply({ files: [filePath] });
        } catch {
            console.log('rah')
        }
        },
    }
