const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const logging = require('../../events/logging.js')
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
		} catch {
			console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
		}
		logging(commandName, interaction, filePath)
	},
}
