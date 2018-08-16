const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await msg.channel.awaitMessages(response => response.content === "yes" || response.content === "no", {time: 40000});
 if(response.content === "yes") message.channel.send("yes");
};

module.exports.help = {
  name: "lottery"
}
