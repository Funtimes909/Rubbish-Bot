module.exports = {
    async execute(interaction) {
        try {
            await interaction.reply({ content: "Updated status" });
        } catch (e) {
            console.log(`There was an error running the ${commandName} command!`)
        }
        logging(this.name, interaction)
    }
}