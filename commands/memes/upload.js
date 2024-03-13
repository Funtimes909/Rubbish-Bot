const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const folderPath = '/home/funtimes909/Documents/Uploads';

module.exports = {
	data: new SlashCommandBuilder()
	.setName('upload')
	.setDescription('uploads an attachment for amy to review to add to the memes folder')
	.addAttachmentOption(option =>
		option.setName('file')
		.setDescription('Please select a file to upload')
		.setRequired(true)),

        async execute(interaction) {
            const uploadResponse = (interaction.options.getAttachment('file'))
            const Attachment = uploadResponse.toJSON();
            console.log(Attachment[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            // fs.writeFileSync(Attachment, '/home/funtimes909/Documents/Uploads/cock.png')
            await interaction.reply({ content: "You have uploaded this image to Amy for review!", folderPath: [Attachment]})
    }
}
            
    