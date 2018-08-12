const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
if(!ticket[message.author.id]){
  
   message.reply("You do not have a ticket! Feel free to generate one.");

}
   else{
     var ticket1 = ticket[message.author.username].ticketid;
    message.reply(`Your ticket is: ${ticket1}.`);
    
    
  }

}

module.exports.help = {
  name: "ticket"
}
