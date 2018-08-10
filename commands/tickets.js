const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
  

  message.channel.send(ticket)
  console.log(ticket);  

}

module.exports.help = {
  name: "tickets"
}
