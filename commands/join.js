const Discord = require('discord.js')
const ffmpeg = require('ffmpeg')
module.exports.run = async (bot, message, args) => {
    let channel = bot.channels.find('name', 'General') || bot.channels.find('name', 'Music');
    
  channel.join()
  .then(connection => message.channel.send('***Successfully Connected!***'))
  .catch(console.error);

    
}

module.exports.help = {
    "name": "join"
}
