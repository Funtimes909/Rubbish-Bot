const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { log, error } = require('../../events/log.js')
const OhioFolderPath = '/home/funtimes909/Documents/Memes/Memes Made in Ohio';
const commandName = "/ohio"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ohio')
	.setDescription('Sends a random ohio meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(OhioFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
	},
}
