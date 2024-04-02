const { SlashCommandBuilder } = require('discord.js')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://192.168.1.210:27017/";
const client = new MongoClient(uri);
const commandName = '/suggest'
const { logger } = require('../../events/log.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Leaves a suggestion to add to the bot and saves it to a database')
        .addStringOption(suggestion =>
            suggestion.setName('suggestions')
                .setDescription('Whats your suggestion?')
                .setRequired(true))
        .addStringOption(details =>
            details.setName('details')
                .setDescription('Is there anything else I should know?')
                .setRequired(true)),
    async execute(interaction) {
        const suggestion = interaction.options.getString('suggestions');
        const detail = interaction.options.getString('details');
        const user = interaction.user.tag
        await interaction.reply({ content: `You submitted "${suggestion}" to the database!`, ephemeral: true })
        async function insert() {
            const document = {
                suggestion: suggestion,
                detail: detail,
                user: user
            }
            const db = client.db('rubbish')
            const suggestions = db.collection('suggestions')
            const result = await suggestions.insertOne(document)
        }
        logger('log', commandName, interaction, suggestion)
        insert()
    }
}