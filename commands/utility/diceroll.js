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
        } catch {
            console.log(`[COMMAND_ERROR] There was an error running the ${commandName} command!`)
        }
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		console.log("[COMMAND_EXECUTED] " + userId + " ran " + commandName + " in " + guildName + `[VALUE] ${randomIndex + 1}`)
    }
}