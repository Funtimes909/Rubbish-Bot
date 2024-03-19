const { SlashCommandBuilder } = require('discord.js');
const { log, error } = require('../../events/log.js')
const commandName = "/say"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Says something as the bot')
		.addStringOption(option =>
			option.setName('text')
			.setDescription('choose something to say')
			.setRequired(true)),
	async execute(interaction) {
		const text = interaction.options.getString('text')
		const bannedWords = "@"
		try {
		if (text.includes(bannedWords)) {
			await interaction.reply("Please don't try to ping users/roles!")
			}
		else {
		await interaction.reply(text)
		}
		} catch (err) {
			error(commandName, interaction, err)
		}
		log(commandName, interaction, text)
	}
}