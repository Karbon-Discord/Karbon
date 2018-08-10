const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
var id = Math.floor(Math.random() * 4000000) + 1000000

if(!ticket[message.author.id]){
   ticket[message.author.id] = {
     ticketid: id
  };
}
 message.reply(`**Your Lottery ID is: ${id}. Please remember to not run this command again. **`);

}

module.exports.help = {
  name: "generate"
}
