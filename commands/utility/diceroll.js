const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { log, error } = require('../../events/log.js')
const DiePath = 'images/Die';
const commandName = "/roll"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a die!'),
	async execute(interaction) {
		const files = fs.readdirSync(DiePath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(DiePath, randomFile);
		try {
		await interaction.reply({ content: "The value is " + (randomIndex +1) + "!", files: [filePath] });
		}
		catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
    }
}