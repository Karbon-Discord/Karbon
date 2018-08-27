const Discord = require('discord.js');
const errors = require('./utils/errors.js');

module.exports.run = async (bot, message, args) => {
    var phrase = args.join(' ');
    if(!phrase) return errors.correctUsage(message, "k:botsay [phrase]");
    message.delete().catch();
    message.channel.send(phrase)

}


module.exports.help = {
    name: "botsay"
}