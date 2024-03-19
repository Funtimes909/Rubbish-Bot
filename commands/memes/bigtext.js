const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const { log, error } = require('../../events/log.js')
const BigtextFolderPath = '/home/funtimes909/Documents/Memes/Funny 3D Text';
const commandName = "/bigtext"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('bigtext')
	.setDescription('Sends a random 3D text meme from amys memes folder'),
	async execute(interaction) {
		const filePath = randomFile(BigtextFolderPath, false);
		try {
			await interaction.deferReply();
			await interaction.editReply({ files: [filePath] });
		} catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, filePath)
	},
}
