const { SlashCommandBuilder } = require('discord.js');
const logging = require('../../events/logging.js')
const { changeStatus} = require('../../util/randomStatus.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Changes the status to something random'),
    async execute(interaction) {
        changeStatus(interaction.client);
        try {
            await interaction.reply({ content: "Updated status" });
        } catch (e) {
            console.log(`There was an error running the ${commandName} command!`)
        }
        logging(this.name, interaction)
    }
}