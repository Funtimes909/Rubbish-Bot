const { Client, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const commandName = "/help"

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays general help information about the bot'),
    async execute(interaction) {
        const color = getRandomColor()
        const helpCommand = new EmbedBuilder()
            .setTitle('Commands')
            .setColor(color)
            .setAuthor({ name: 'Funtimes909 (owner)', iconURL: 'https://funtimes909.xyz/images/avatar.gif', url: 'https://funtimes909.xyz/' })
            .setThumbnail('https://funtimes909.xyz/images/uncle-ted.png')
            .setDescription('**Memes**')
            .addFields(
                { name: '/meme', value: 'Sends a random meme from a huge repository', inline: true })
            .addFields(
                { name: '/cat', value: 'Sends a random cat meme from a huge repository', inline: true })
            .addFields(
                { name: '/mrbeast', value: 'Sends a random Mr Beast overlay from a huge repository', inline: true })
            .addFields(
                { name: '/speechbubble', value: 'Sends a random speechbubble reaction image from a huge repository', inline: true })
            .addFields(
                { name: '/ohio', value: 'Sends a random brain rot meme from a huge repository', inline: true })
            .addFields(
                { name: '/jolly', value: 'Sends a random jolly meme from a huge repository', inline: true })
            .addFields(
                { name: '/brian', value: 'Sends a random bad luck brian meme from a huge repository', inline: true })
            .addFields(
                { name: '/bigtext', value: 'Sends a random 3D text meme from a huge repository', inline: true })
        const helpCommandContinued = new EmbedBuilder()
            .setColor(color)
            .setDescription('**Utility**')
            .addFields(
                { name: '/roll', value: 'Rolls a die and returns the corresponding value', inline: true })
            .addFields(
                { name: '/gay', value: 'Rates a user on how gay they are', inline: true })
            .addFields(
                { name: '/status', value: 'Changes the bots status to something random', inline: true })
            .addFields(
                { name: '/say', value: 'Say something as the bot with the option to make it anonymous', inline: true })
            .addFields(
                { name: '/roll', value: 'Starts a quick game of rock paper scissors', inline: true })
            .addFields(
                { name: '/override', value: 'Overrides the bots current status with whatever you want (only avaliable to the owner of the bot)', inline: true })
        await interaction.reply({ content: "Thanks for checking out Rubbish Bot! Heres a list of commands to help you get started!", embeds: [helpCommand, helpCommandContinued] })
    }
}