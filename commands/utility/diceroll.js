const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const DiePath = 'images/Die';
const commandName = "/roll"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a die!'),
	async execute(interaction) {
		const files = fs.readdirSync(DiePath);
		const randomIndex = Math.floor(Math.random() * files.length);
		const randomFile = files[randomIndex];
		const filePath = path.join(DiePath, randomFile);
		try {
		await interaction.reply({ content: "The value is " + (randomIndex +1) + "!", files: [filePath] });
		}
		catch {
			console.log(`There was an error running the ${commandName} command!`)
		}
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		const channelName = interaction.channel.name
		const date = new Date
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		console.log("[COMMAND_EXECUTED] " + `[${hours}:${minutes}] ` + userId + " ran " + commandName + " in #" + channelName + " in " + guildName + ` [${randomIndex +1}]`)
    }
}