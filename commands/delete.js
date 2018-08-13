const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
  let numMsg = args[0];
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no.");
  if(!numMsg) return message.reply("no.");
  message.channel.bulkDelete(numMsg).then(() => {
    message.channel.send(`Deleted ${numMsg} successfully!`).then(msg => msg.delete(3000))
  })
}

module.exports.help = {
    name: "delete"
}
