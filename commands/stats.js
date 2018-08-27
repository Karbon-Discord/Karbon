const Discord = require('discord.js');
const errors = require('utils/errors.js');
const config = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor(config.green)
    .setTitle("Karbon Discord Bot Statistics")
    .setAuthor(message.author.id)
    .addField("Servers", bot.guilds.size)
    .addField("Members", bot.users.size)
    .addField("Channels", bot.channels.size);
    message.channel.send(embed)
}

module.exports.help = {
    name: "stats"
}