const getTime = function () {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    time = hours + ":" + minutes + ":" + seconds;
    return time;
}

const logger = function (type, commandName, interaction, filePath, err) {
    const userName = interaction?.user?.tag || "Unknown User"
    const guildName = interaction?.guild?.name || "[DM]"
    const channelName = interaction?.channel?.name || "Unknown Channel"
    if (type == "status") {
        console.log(`[BOT_STATUS] [${getTime()}] Bot status has been changed to [${activity.type}] [${activity.status}]`)
    }
    else if (type == "log") {
        console.log(`[COMMAND_EXECUTED] [${getTime()}] ${userName} ran ${commandName} in #${channelName} in ${guildName} [${filePath}]`)
    }
    else {
        console.error(`[ERROR] [${getTime()}] ${userName} tried to run ${commandName} in #${channelName} in ${guildName} but an error occured! [${err.name}] [${err.message}]`)
    }
}

module.exports = {
    logger
}

