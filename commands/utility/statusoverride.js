const { SlashCommandBuilder } = require('discord.js');
const { logger } = require('../../events/log.js')
const overrideStatus = require('../../util/overrideStatus.js')
const commandName = "/override"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('override')
        .setDescription('Overrides the status with whatever you want')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type of status bot will be set to')
                .setRequired(true)
                .addChoices(
                    { name: 'Listening', value: 'Listening' },
                    { name: 'Playing', value: 'Playing' },
                    { name: 'Watching', value: 'Watching' }))
        .addStringOption(option =>
            option.setName('status')
                .setDescription('Current status to set bot to')
                .setRequired(true)),
    async execute(interaction) {
        const overriddenType = interaction.options.getString('type')
        const overriddenStatus = interaction.options.getString('status')
        if (interaction.user.id == "652755888230236160") {
            overrideStatus(interaction.client, overriddenType, overriddenStatus);
            try {
                await interaction.reply({ content: `Sucessfully overrided current status with [${overriddenType}] [${overriddenStatus}]` });
            } catch (err) {
                    logger("error", commandName, interaction, err)
                }
            }
            else {
                await interaction.reply("You do not have permission to run this command!")
            }
        logger("status", commandName, interaction, overriddenStatus) // TODO: Fix this returning undefined to logger()
    }
}