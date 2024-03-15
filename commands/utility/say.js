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
		try {
		if (text.includes(bannedWords)) {
			await interaction.reply("Please don't try to use these words!")
		}
		else {
		await interaction.reply(text)
		}
		} catch {
			console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
		}
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		const channelName = interaction.channel.name
		const date = new Date
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		console.log("[COMMAND_EXECUTED] " + `[${hours}:${minutes}] ` + userId + " ran " + commandName + " in #" + channelName + " in " + guildName + ` [${text}]`)
	}
}
