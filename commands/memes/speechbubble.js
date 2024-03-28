const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { logger } = require('../../events/log.js')
const SpeechbubbleFolderPath = '/home/funtimes909/Documents/Memes/Speech Bubbles';
const commandName = "/speechbubble"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('speechbubble')
	.setDescription('Sends a random speechbubble meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(SpeechbubbleFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			logger("error", commandName, interaction, err)
		}
		logger("log", commandName, interaction, filePath)
	},
}
