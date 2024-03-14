const { ActivityType } = require('discord.js');

module.exports.statuses = {
    Watching: [
        "Helluva Boss",
        "Hazbin Hotel",
        "Breaking Bad",
        "Better Call Saul",
        "Stranger Things",
        "The world burn",
        "The Walking Dead",
        "Brodie Robertson",
        "Doctor Who",
        "Skibidi Toilet",
        "Coraline",
        "Red Hat Enterprise Linux",
        "YOU",
        "Matt Patts Final Theory"
    ],
    Playing: [
        "Minecraft",
        "Project Zomboid",
        "ULTRAKILL",
        "Windows 95",
        "Windows XP",
        "Among Us",
        "OMORI",
        "Wikipedia",
        "Visual Studio Code",
        "Linux",
        "Firefox",
        "Hello Kitty Island Adventure",
        "Vencord",
        "RDR2",
        "Lethal Company",
        "/home/funtimes909/",
        "Gacha Life",
        "Muse Dash",
        "DDLC",
        "Genshin Impact",
        "rm -rf /*",
        "Project Sekai",
        "Valheim",
        "Celeste",
        "UNDERTALE",
        "Subnautica"
    ],
    Listening: [
        "Arcade Fire",
        "Daft Punk",
        "Waterflame",
        "Queen",
        "Keygen Church",
        "Tally Hall",
        "Heaven Pierce Her",
        "100 Gecs",
        "Doctor Who Theme",
        "Skibidi Toilet Phonk",
        "Odetari",
        "TV Girl",
        "Crazy Little Thing Called Love",
        "Lethal Company Delivery Music",
        "Nimbasa Core",
        "MrKitty"
    ]
}

const statusTypeMap = {
    Playing: ActivityType.Playing,
    Streaming: ActivityType.Streaming,
    Listening: ActivityType.Listening,
    Watching: ActivityType.Watching,
    Custom: ActivityType.Custom,
    Competing: ActivityType.Competing
}

module.exports.ChangeStatus = function ChangeStatus(client) {
    if (!client.isReady()) return;
    const keys = Object.keys(statuses)
    const type = keys[(Math.trunc(Math.random() * keys.length))]
    const items = statuses[type]
    const currentStatus = items[(Math.trunc(Math.random() * items.length))]
    client.user.setActivity(currentStatus, { type: statusTypeMap[type] });
    console.log(`[BOT_STATUS] Bot status has been set to [${type}] [${currentStatus}]`)
}