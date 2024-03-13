const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gay')
        .setDescription('Rate a user based on how gay they are')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('user to rate')
                .setRequired(true)),

    async execute(interaction) {
        const gay = Math.trunc(Math.random() * 100)
        const user = ("<@" + interaction.options.getUser('user') + ">")
        if (gay == 0) {
            await interaction.reply({content: user + " is " + gay + "% Gay! Hetreosexual spotted, proceeding to ban..."})
        }
        else if (gay == 100) {
        await interaction.reply({content: user + " is " + gay + "% Gay! You are extremely gay, You are literally a total gayass"})
        }
        else if (gay == 50) {
            await interaction.reply({content: user + " is " + gay + "% Gay! You aren't gay? You're bisexual!"})
        }
        else if (gay == 69) {
            await interaction.reply({content: user + " is " + gay + "% Gay! You want GAY SEX???"})
        }
        else {
            await interaction.reply({content: user + " is " + gay + "% Gay!"})
        }
    }
}