const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const logging = require('../../events/logging.js')
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
		} catch {
			console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
		}
		logging(commandName, interaction, filePath)
	},
}
