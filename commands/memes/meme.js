const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { logger } = require('../../events/log.js')
const memeFolderPath = '/home/funtimes909/Documents/Memes/';
const commandName = "/meme"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('meme')
	.setDescription('Sends a random meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(memeFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			logger("error", commandName, interaction, err)
		}
		logger("log", commandName, interaction, filePath)
	},
}