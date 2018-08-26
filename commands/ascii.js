const Discord = require('discord.js');
const ascii = require('ascii-art');
module.exports.run = async (bot, message, args) => {
    var sentence =  args.join(' ').slice(1)
    ascii.font(sentence);
    message.channel.sendCode(`${sentence}`, 'xl')

}

module.exports.help = {
  name: "ascii"
}
