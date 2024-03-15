const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { randomFile } = require("../../util/randomFile");
const logging = require('../../events/logging.js')
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
		} catch {
			console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
		}
		logging(commandName, interaction, filePath)
	},
}
