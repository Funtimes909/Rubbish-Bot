const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder
const ComputerChoices = ['Rock', 'Paper', 'Scissors']
const commandName = "/rps"

module.exports = {
	data: new SlashCommandBuilder()
	.setName('rps')
	.setDescription('Starts a game of Rock Paper Scissors!')
	.addStringOption(option =>
		option.setName('choice')
		.setDescription('Please select an option')
		.setRequired(true)
		.addChoices(
			{ name: 'Rock', value: 'Rock' },
			{ name: 'Paper', value: 'Paper' },
			{ name: 'Scissors', value: 'Scissors' },
			)),
			
			async execute(interaction) {
				const player = interaction.options.getString('choice')
				const computer = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
				let result;
				if (player === computer) {
					result = 'Tie!'
				}
				else if (player == 'Rock') {
					if (computer == 'Paper') {
						result = "You Lose!"
					} else {
						result = "You Win!"
					}
				}
				else if (player == 'Scissors') {
					if (computer == 'Rock') {
						result = "You Lose!"
					} else {
						result = "You Win!"
					}
				}
				else if (player == 'Paper') {
					if (computer == 'Scissors') {
						result = "You Lose!"
					} else {
						result = "You Win!"
					}	
				}
				await interaction.reply({content: 'I choose ' + (computer) + ', you choose ' + (player) + ', ' + (result)})
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		const channelName = interaction.channel.name
		const date = new Date
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		console.log("[COMMAND_EXECUTED] " + `[${hours}:${minutes}] ` + userId + " ran " + commandName + " in #" + channelName + " in " + guildName + ` [${player} ${computer} ${result}]`)
	}
}