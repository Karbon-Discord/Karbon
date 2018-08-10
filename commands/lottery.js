const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
  
  var id = Math.floor(Math.random() * 4000000) + 1000000
  if(!ticket[message.author.id]){
  message.reply("Please run the command: --generate.")
}
  
  
 message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
