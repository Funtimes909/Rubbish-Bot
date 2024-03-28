const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { logger } = require('../../events/log.js')
const ChristmasFolderPath = '/home/funtimes909/Documents/Memes/Christmas Gifs';
const commandName = "/jolly"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('jolly')
	.setDescription('Sends a random christmas meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(ChristmasFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			logger("error", commandName, interaction, err)
		}
		logger("log", commandName, interaction, filePath)
	},
}
