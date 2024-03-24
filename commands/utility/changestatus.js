const { SlashCommandBuilder } = require('discord.js');
const { log, error } = require('../../events/log.js')
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
            error(commandName, interaction, err)
        }
        log(commandName, interaction)
    }
}