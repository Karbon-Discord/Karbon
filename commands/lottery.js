const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
   if(!ticket[message.author.username]){
   message.reply("Please run the command: --generate.")
 }
   else{
      var oof = ticket[message.author.username].ticketid;
      console.log(oof);
//  }
  
// message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
