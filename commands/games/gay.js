const { SlashCommandBuilder } = require('discord.js');
const { log, error } = require('../../events/log.js')
const commandName = "/gay"

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
        const gay = Math.trunc(Math.random() * 101)
        const user = ("<@" + interaction.options.getUser('user') + ">")
        try {
        if (gay == 0) {
            await interaction.reply({ content: `${user} is ${gay}% gay! Heterosexual detected, proceeding to ban` })
        }
        else if (gay == 100) {
            await interaction.reply({ content: `${user} is ${gay}% gay! You are extremely gay, You are literally a total gayass` })
        }
        else if (gay == 50) {
            await interaction.reply({ content: `${user} is ${gay}% gay! You aren't gay? You're bisexual` })
        }
        else if (gay == 69) {
            await interaction.reply({ content: `${user} is ${gay}% gay! YOU WANT GAY SEX?` })
        }
        else {
            await interaction.reply({ content: `${user} is ${gay}% gay!` })
        }
    } catch (err) {
        error(commandName, interaction, err)
    }
        log(commandName, interaction, gay)
    }
}
