const Discord = require('discord.js');
const errors = require('./utils/errors.js');

module.exports.run = (bot, message, args) => {
    message.delete();
    message.channel.send(args.join(' ').replace("@everyone", "everyone").replace("@here", "here")).catch(console.error);
}


module.exports.help = {
    name: "botsay"
}
