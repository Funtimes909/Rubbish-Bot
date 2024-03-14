const { SlashCommandBuilder } = require('discord.js');
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
		if (text.includes(bannedWords)) {
			await interaction.reply("Please don't try to use these words!")
		}
		else {
		await interaction.reply(text)
		}
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		console.log("[COMMAND_EXECUTED] " + userId + " ran " + commandName + " in " + guildName + `(${text})`)
	}
}
