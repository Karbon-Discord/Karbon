const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {

if(!ticket[message.author.id]){
   var id = Math.floor(Math.random() * 4000000) + 1000000

   ticket[message.author.id] = {
     ticketid: id
  };
   
   fs.writeFile('../lotteryticket.json', JSON.stringify(id), err => {
         if(err) console.log(err);
   })
}
   else{
    message.reply("You have already generated a ticket!");
    
    
  }
 message.reply(`**Your Lottery ID is: ${id}. **`);

}

module.exports.help = {
  name: "generate"
}
