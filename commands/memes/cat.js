const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { log, error } = require('../../events/log.js')
const CatFolderPath = '/home/funtimes909/Documents/Memes/Cat Memes';
const commandName = "/cat";

module.exports = {
	data: new SlashCommandBuilder()
	.setName('cat')
	.setDescription('Sends a random cat meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(CatFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
	},
}
