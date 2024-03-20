const { ActivityType } = require('discord.js');

const activities = {
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
        "Matt Patts Final Theory",
        "Mr Breast",
        "the Brain Rot Machine",
        "Gentoo compile",
        "Linux compile",
        "Chromium compile",
        "Dream",
        "Cringe Minecraft YouTubers",
        "Java Tutorial 12 Hours",
        "Sorting Algorithms",
        "Vencord #support channel",
        "Richard Stallman",
        "Techbros",
        "Hello Street Cat",
        "19 hour git tutorial",
        "19 dollar fortnite card",
        "plasma-discover crashing",
        "https://discord.gg/WEErxAP8kz",
        "macOS users install Xcode",
        "Mojang employees doing absolutely nothing", // unfortunately real
        "https://funtimes909.xyz",
        "Someone not changing their password after getting hacked",
        "Odetaris spotify profile",
        "videos of cats"
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
        "Subnautica",
        "Splatoon 3",
        "yuzu",
        "Citra",
        "Ryujinx",
        "KDE Plasma",
        "sudo chmod 000 /",
        "sudo chown root /home",
        "Firtnite",
        "Tomodachi Life",
        "Super Mario 64",
        "Gran Turismo 4",
        "Animal Crossing",
        "sudo pacman -Syu",
        "with POWER!",
        "Dolphin",
        "SuperTuxKart",
        "Xorg",
        "systemd",
        "Rubbish-Bot",
        "GitHub",
        "Arch Linux",
        "with Konqi",
        "The Last of Us",
        "The Last of US Part 2",
        "4 thousand dollar rgb gaming computer",
        "uncanny fungus",
        "RGB Keyboards"
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
        "MrKitty",
        "dQw4w9WgXcQ",
        "screams from the basement",
        "screams from the closet",
        "screams from the walls",
        "catgirls meowing",
        "Sorting Algorithms",
        "Trap Nation",
        "Spotify",
        "30 Dollar Website",
        "12 year old CoD players",
        "Weezer", // Weez nuts
        "Weez Nuts",,
        "Deez Nuts",
        "9 + 10",
        "Gianni Matragrano",
        "Minecraft Villagers",
        "Scary Monsters and Nice Sprites MIDI"
    ]
}

module.exports.statuses = activities;

const activityTypeMap = {
    Playing: ActivityType.Playing,
    Streaming: ActivityType.Streaming,
    Listening: ActivityType.Listening,
    Watching: ActivityType.Watching,
    Custom: ActivityType.Custom,
    Competing: ActivityType.Competing
}

module.exports.activityTypeMap = activityTypeMap;

const statuses = ['online', 'idle', 'dnd'];

module.exports.statuses = statuses;

module.exports = function changeStatus(client) {
    const keys = Object.keys(activities)
    const type = keys[(Math.floor(Math.random() * keys.length))]
    const items = activities[type]
    const currentStatus = items[(Math.floor(Math.random() * items.length))]
    client.user.setActivity(currentStatus, { type: activityTypeMap[type] });
    console.log(`[BOT_STATUS] Bot status has been set to [${type}] [${currentStatus}]`)
	client.user.setStatus(statuses[(Math.floor(Math.random() * statuses.length))]);
    
}