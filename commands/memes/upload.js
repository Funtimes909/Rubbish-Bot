const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Buffer } = require('node:buffer');
const { createHash } = require('node:crypto');
const folderPath = '/home/funtimes909/Documents/Uploads';
const submissionsChannelID = "";

module.exports = {
    data: new SlashCommandBuilder()
    .setName('upload')
    .setDescription('uploads an attachment for amy to review to add to the memes folder')
    .addAttachmentOption(option => {
        return option.setName('file')
        .setDescription('Please select a file to upload')
        .setRequired(true);
    }),
    
    async execute(interaction) {
        const submissionsChannel = interaction.client.channels.resolve(submissionsChannelID);
        await interaction.reply("Downloading file...");
        const attachment = interaction.options.getAttachment('file')
        let request = await fetch(attachment.url);
        const attachmentData = Buffer.from(await request.arrayBuffer());
        const hash = createHash('sha256').update(attachmentData).digest("hex");
        const filePath = path.join(folderPath, "files", hash);
        const metaPath = path.join(folderPath, "meta", hash);
        if (fs.existsSync(metaPath)) {
            let metadata = JSON.parse(fs.readFileSync(metaPath).toString());
            switch (metadata.state) {
                case "pending":
                    return Promise.all(
                        interaction.reply({ content: "You have uploaded this image to Amy for review!"}),
                        submissionsChannel.send({
                            embeds: new EmbedBuilder[{
        
                            }],
        
                        })
                        );
                    break;
            }
        } else {
        }

        // fs.writeFileSync(Attachment, '/home/funtimes909/ocuments/Uploads/cock.png')
        await interaction.reply({ content: "You have uploaded this image to Amy for review!"})
    }
}

