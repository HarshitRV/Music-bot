module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        message.author.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Sent the title of the music by private messages ✅\nMake sure that your DMs are open 😊`);
        }).catch(error => {
            message.channel.send(`Unable to send you a private message ${message.author}... try again ? ❌`);
        });
    },
};