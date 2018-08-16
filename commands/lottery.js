const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
let storage = require("../storage.json");
module.exports.run = async (bot, message, args) => {
 let lol = Object.keys(storage).length;
 console.log(lol)
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes") message.reply(`Okay, so these are the winners of the lottery: <@${message.author.id}`)

 })
};

module.exports.help = {
  name: "lottery"
}
