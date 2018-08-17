const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
let storage = require("../storage.json");
let katoms = require("../katoms.json");

module.exports.run = async (bot, message, args) => {
 let lol = Object.keys(storage);
 let randomness = Math.floor(Math.random() * lol.length)
  let randomness2 = Math.floor(Math.random() * lol.length)
 let randomness3 = Math.floor(Math.random() * lol.length)

 if(!katoms[message.author.id]){
  katoms[message.author.id] = {
   katoms:0
  }
};
 
 
 console.log(lol)
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes"){
   message.reply(`Okay, so these are the winners of the lottery: <@${lol[randomness]}>, who earned 250 Katoms <@${lol[randomness2]}>, who earned 500 Katoms, as well as <@lol[randomness3>, who earned 750 Katoms + A special role!`)

  katoms[`${lol[randomness]}`].katoms += 250;
  katoms[`${lol[randomness2]}`].katoms += 500;
//  katoms[lol[randomness3]].katoms += 750;
  console.log(katoms);

  }
  else if(response.content === "no") return message.reply(":x: | **Lottery Canceled**")
 })
};

module.exports.help = {
  name: "lottery"
}
