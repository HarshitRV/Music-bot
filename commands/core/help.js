const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '$%>$@',
    aliases: ['nothingNew'],
    showHelp: false,
    utilisation: '{prefix}music',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('0x0949EE');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription("**Commands**");
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Requested by '+message.author.username , message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};