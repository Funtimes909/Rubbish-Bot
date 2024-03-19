const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { log, error } = require('../../events/log.js')
const BrianFolderPath = '/home/funtimes909/Documents/Memes/Bad Luck Brian';
const commandName = "/brian"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('brian')
	.setDescription('Sends a random bad luck brian meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(BrianFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
	},
}
