const { ActivityType } = require('discord.js')

module.exports = function overrideStatus(client, overriddenType, overriddenStatus) {
    if (overriddenType == "Listening") {
        client.user.setActivity(overriddenStatus, { type: ActivityType.Listening });
    }
    else if (overriddenType == "Watching") {
        client.user.setActivity(overriddenStatus, { type: ActivityType.Watching });
    }
    else {
        client.user.setActivity(overriddenStatus, { type: ActivityType.Playing });
    }
}