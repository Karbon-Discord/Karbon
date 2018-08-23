const Discord = require('discord.js');
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
    
  let numMsg = args[0];
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no.");
  if(!numMsg) return errors.correctUsage(message, "--delete [num. messages]");
  message.channel.bulkDelete(numMsg).then(() => {
    message.channel.send(`Deleted ${numMsg} messages successfully!`).then(msg => msg.delete(3000))
  })
}

module.exports.help = {
    name: "delete"
}
