const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { log, error } = require('../../events/log.js')
const MrbeastFolderPath = '/home/funtimes909/Documents/Memes/Mr Beastified YouTube';
const commandName = "/mrbeast"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('mrbeast')
	.setDescription('Sends a random mr beast reacts meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(MrbeastFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
	},
}
