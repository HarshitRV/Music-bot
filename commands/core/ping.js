const ms = require('ms');

module.exports = {
    name: 'ping-music',
    aliases: ["pm"],
    utilisation: '{prefix}ping-music',

    execute(client, message) {
        message.channel.send(`Last heartbeat calculated ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** 🛰️`);
    },
};