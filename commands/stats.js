const Discord = require('discord.js');
const errors = require('./utils/errors.js');
const config = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = Math.round(seconds)

    let embed = new Discord.RichEmbed()
    .setColor(config.green)
    .setTitle("Karbon Discord Bot Statistics")
    .setAuthor(message.author.username)
    .addField("Servers", bot.guilds.size)
    .addField("Members", bot.users.size)
    .addField("Channels", bot.channels.size)
    .addField("Uptime", `${hours} hours, ${minutes} minutes, ${seconds} seconds.`);
    message.channel.send(embed)
}

module.exports.help = {
    name: "stats"
}