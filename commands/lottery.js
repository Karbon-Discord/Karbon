const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => { 
  response.content === "yes" || response.content === "no" 
    if(response.content === "yes") return message.channel.send(response.content);
  else return message.channel.send("no")
  });


};

module.exports.help = {
  name: "lottery"
}
