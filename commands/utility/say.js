const { SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { log, error } = require('../../events/log.js');
const commandName = "/say";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Says something as the bot')
		.addStringOption(quiet =>
			quiet.setName('quiet')
				.setDescription('Should the text be anonymous')
				.setRequired(true)
				.addChoices(
					{ name: 'False', value: 'False' },
					{ name: 'True', value: 'True' }))
		.addStringOption(option =>
			option.setName('text')
				.setDescription('choose something to say')
				.setRequired(true)),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const quiet = interaction.options.getString('quiet');
		const bannedWords = "@";
		try {
			if (quiet == "True") {
				if (text.includes(bannedWords)) {
					await interaction.reply({ content: "Please do not try to ping users/roles!", ephemeral: true });
				} else {
					await interaction.reply({ content: "You have sent an anonymous message!", ephemeral: true })
					await interaction.channel.send({ content: text });
				}
			} else {
				if (text.includes(bannedWords)) {
					await interaction.reply({ content: "Please do not try to ping users/roles!" });
				} else {
					await interaction.reply({ content: text });
				}
			}
		} catch (err) {
			error(commandName, interaction, err);
		}
		log(commandName, interaction, text);
	}
};
