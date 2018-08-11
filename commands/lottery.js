const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
   if(!ticket[message.author.username]){
   message.reply("Please run the command: --generate.")
 }
   else{
    var user = message.author.username
    message.channel.send(`Okay, so these are the tickets that got generated: ${ticket.user.ticketid}`)
    console.log(ticket.user.ticketid);
//  }
  
// message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
