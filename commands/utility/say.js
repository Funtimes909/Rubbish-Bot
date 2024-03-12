const { SlashCommandBuilder } = require('discord.js');

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
		await interaction.reply(text)
		}
    }
