const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
if(!ticket[message.author.id]){
  
   message.reply("You do not have a ticket! Feel free to generate one.");

}
   else{
     var ticket = ticket[message.author.id].ticketl
    message.reply(`Your ticket is: ${ticket}.`);
    
    
  }

}

module.exports.help = {
  name: "ticket"
}
