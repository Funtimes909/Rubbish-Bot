const { SlashCommandBuilder } = require('discord.js');
const { logger } = require('../../events/log.js')
const changeStatus = require('../../util/randomStatus.js')
const commandName = "/status"

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Changes the status to something random'),
    async execute(interaction) {
        changeStatus(interaction.client);
        try {
            await interaction.reply({ content: "Updated status" });
        } catch (err) {
            logger("error", commandName, interaction, err)
        }
        logger("log", commandName, interaction)
    }
}