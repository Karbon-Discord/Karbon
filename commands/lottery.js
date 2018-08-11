const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
//   if(!ticket[message.author.id]){
//   message.reply("Please run the command: --generate.")
// }
//   else{
    message.channel.send(`Okay, so these are the tickets that got generated: ${ticket.ticket}`)
//  }
  
// message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
