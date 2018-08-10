const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
var ticket = ticket[message.author.id].ticket;
if(!ticket[message.author.id]){
  
   message.reply("You do not have a ticket! Feel free to generate one.");

}
   else{
    message.reply(`Your ticket is: ${ticket}.`);
    
    
  }

}

module.exports.help = {
  name: "generate"
}
