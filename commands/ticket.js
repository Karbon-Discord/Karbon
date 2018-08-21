const Discord = require("discord.js");
let lotteryticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
  if(!lotteryticket[message.author.id].ticketid) {
    message.react("🤔"); 
    return message.reply("**You do not have a lottery ticket! Feel free to generate one. | --generate**");
  }
  else {
    message.react("🎫")
    return message.reply(`:ticket: | **Your ticket number is: ${lotteryticket[message.author.id].ticketid}**`)
    
  }    

}

module.exports.help = {
  name: "ticket"
}
