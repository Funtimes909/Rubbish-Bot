const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commandName = "/tod"

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
        .setName('tod')
        .setDescription('Start a game of truth or dare')
        .addStringOption(choice =>
            choice.setName('choice')
                .setDescription('Truth or dare?')
                .setRequired(true)
                .addChoices(
                    { name: 'Truth', value: 'Truth' },
                    { name: 'Dare', value: 'Dare' }))
        .addStringOption(input =>
            input.setName('input')
                .setDescription('choose your question')
                .setRequired(true))
        .addStringOption(anonymous =>
            anonymous.setName('anonymous')
                .setDescription('Should the truth or dare be anonymous?')
                .setRequired(true)
                .addChoices(
                    { name: 'True', value: 'True' },
                    { name: 'False', value: 'False' })),
    async execute(interaction) {
        const choice = interaction.options.getString('choice')
        const input = interaction.options.getString('input')
        const anonymous = interaction.options.getString('anonymous')
        const username = interaction.user.displayName
        const color = getRandomColor()
        const avatarURL = interaction.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });
        const helpCommand = new EmbedBuilder()
            .addFields({ name: choice, value: input, inline: true })
            .setColor(color)
        if (anonymous == 'True') {
            await interaction.reply({ content: 'You have sent an anonymous message!', ephemeral: true })
            await interaction.channel.send({ embeds: [helpCommand] })
        }
        else {
            helpCommand.setAuthor({ name: username, iconURL: avatarURL })
            await interaction.reply({ embeds: [helpCommand] })
        }
    }
}