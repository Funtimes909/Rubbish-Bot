const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const DiePath = '/home/funtimes909/Documents/Die';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a dice and returns an image corrosponding to the value'),
	async execute(interaction) {
		const files = fs.readdirSync(DiePath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(DiePath, randomFile);
        try {
		await interaction.reply({ content: "The value is " + (randomIndex +1) + "!", files: [filePath] });
        } catch {
            console.log('rah')
        }
    }
}