function logging(commandName, interaction, text) {
    const userId = interaction.user.tag + " <@" + interaction.user.id + ">"
    const guildName = interaction?.guild?.name || "[DM]"
    const channelName = interaction?.channel?.name || "?"
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    console.log("[COMMAND_EXECUTED] " + `[${hours}:${minutes}:${seconds}] ` + userId + " ran " + commandName + " in #" + channelName + " in " + guildName + (text ? ` [${text}]` : ""))
}

module.exports = logging;