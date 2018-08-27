const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
let katoms = require("../katoms.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
 
var num1 = Math.floor(Math.random() * 100) + 150;
 var num2 = Math.floor(Math.random() * 200) + 300;
 var num3 = Math.floor(Math.random() * 500) + 500;

 var lol = Object.keys(ticket)
 console.log(lol)
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes"){
 //  message.reply(`Okay, so these are the winners of the lottery: <@${lol[randomness]}>, who earned 250 Katoms <@${lol[randomness2]}>, who earned 500 Katoms, as well as <@lol[randomness3>, who earned 750 Katoms + A special role!`)

 var thirdplace = Math.floor(Math.random() * lol.length);
  var secondplace = Math.floor(Math.random() * lol.length);
  var firstplace = Math.floor(Math.random() * lol.length);
if(!katoms[lol[thirdplace]]){
 katoms[lol[thirdplace]] = {
  katoms:100
 }
  katoms[lol[thirdplace]].katoms = katoms[`${lol[thirdplace]}`].katoms += num1;
 fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
 })
}   
   
   else{  katoms[lol[thirdplace]].katoms = katoms[`${lol[thirdplace]}`].katoms += num2;
   
    fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
    })
       }
   
   if(!katoms[lol[secondplace]]){
 katoms[lol[secondplace]] = {
  katoms:100
 }
  katoms[lol[secondplace]].katoms = katoms[`${lol[secondplace]}`].katoms += num2;
 fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
 })
 console.log(katoms[thirdplace])
    
    
    
}   

   else{  katoms[lol[secondplace]].katoms = katoms[`${lol[secondplace]}`].katoms += num2;
   
    fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);

 })
  }
  
  
  if(!katoms[lol[firstplace]]){
 katoms[lol[firstplace]] = {
  katoms:100
 }
  katoms[lol[firstplace]].katoms = katoms[`${lol[firstplace]}`].katoms += num3;
 fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
 })
 console.log(katoms[thirdplace])
}   
  
else {  katoms[lol[firstplace]].katoms = katoms[`${lol[firstplace]}`].katoms += num3;  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
 })
     }
  
        var embed = new Discord.RichEmbed()
        .setColor("#f4ad42")
        .setTitle("**LOTTERY WINNERS!**")
        .addField(`:third_place: Third Place Winner`, `<@${lol[thirdplace]}>`)
        .addField(`:money_with_wings: K-Atoms Earned`, `${num1}`)
        .addField(`:second_place: Second Place Winner`, `<@${lol[secondplace]}>`)
        .addField(`:money_with_wings: K-Atoms Earned`, `${num2}`)
        .addField(`:first_place: First Place Winner`, `<@${lol[firstplace]}>`)
        .addField(`:money_with_wings: K-Atoms Earned`, `${num3}`);
        message.channel.send(embed);
   

        fs.truncate('../lotteryticket.json', ticket.length, function(){console.log('done')})

  }
  
  else if(response.content === "no") return message.reply(":x: | **Lottery Canceled**")
 })
};

module.exports.help = {
  name: "lottery"
}
