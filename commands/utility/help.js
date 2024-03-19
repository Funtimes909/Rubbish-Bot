const { Client, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const commandName = "/help"

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays general help information about the bot'),
    async execute(interaction) {
        const helpCommand = new EmbedBuilder()
            .setColor('#f5ff0d')
            .setTitle('Welcome to Rubbish Bot!')
            .setThumbnail('https://funtimes909.xyz/images/uncle-ted.png')
            .setDescription('This bot is a general purpose shitposting and utility bot designed to bring a few simple and fun commands to your server.')
            .setFooter({ text: 'Made by funtimes909', iconURL: 'https://funtimes909.xyz/images/avatar.gif' })
            .addFields(
                { name: 'Below is a list of commands you can use', value: '/help /gay /meme /ohio /jolly /speechbubble /say /bigtext /brian /cat /mrbeast /rps /status /roll' })
        await interaction.reply({content: "Thanks for checking out Rubbish Bot! Heres a list of commands to use.", embeds: [helpCommand]})
    }
}