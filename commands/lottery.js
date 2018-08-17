const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
let storage = require("../storage.json");
let katoms = require("../katoms.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
 let lol = Object.keys(storage);
 let randomness = Math.floor(Math.random() * lol.length)
  let randomness2 = Math.floor(Math.random() * lol.length)
 let randomness3 = Math.floor(Math.random() * lol.length)
let random = Math.floor(Math.random() * 250) + 170
let random2 = Math.floor(Math.random() * 500) + 340
let random3 = Math.floor(Math.random() * 750) + 510

 
 
 console.log(lol)
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes"){
   message.reply(`Okay, so these are the winners of the lottery: <@${lol[randomness]}>, who earned 250 Katoms <@${lol[randomness2]}>, who earned 500 Katoms, as well as <@lol[randomness3>, who earned 750 Katoms + A special role!`)

  katoms[`${lol[randomness]}`].katom =  katoms[`${lol[randomness]}`].katom + random;
  fs.writeFile('../katoms.json', JSON.stringify(random), err => {
   if(err) console.log(err);
  })
 if(!katoms[lol[randomness]]){
   katoms[lol[randomness]] = {
    katom:random
   }
  fs.writeFile('../katoms.json', JSON.stringify(random), err => {
   if(err) console.log(err);
  })
 };
   
   
     katoms[`${lol[randomness2]}`].katom =  katoms[`${lol[randomness]}`].katom + random2;
  fs.writeFile('../katoms.json', JSON.stringify(random2), err => {
   if(err) console.log(err);
  })
     katoms[`${lol[randomness3]}`].katom =  katoms[`${lol[randomness3]}`].katom + random3;
  fs.writeFile('../katoms.json', JSON.stringify(random3), err => {
   if(err) console.log(err);
  })
  }
  else if(response.content === "no") return message.reply(":x: | **Lottery Canceled**")
 })
};

module.exports.help = {
  name: "lottery"
}
