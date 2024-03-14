const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder
const ComputerChoices = ['Rock', 'Paper', 'Scissors']
const commandName = "/rps"

function Logic(player, computer) {
}

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
				await interaction.reply({
			content: 'I choose ' + (computer) + ', you choose ' + (player) + ', ' + (result),
		})
		const userId = interaction.user.tag 
		const guildName = interaction.guild.name
		console.log("[COMMAND_EXECUTED] " + userId + " ran " + commandName + " in " + guildName + `[VALUE] ${computer} ${player} ${result}`)
	}
}