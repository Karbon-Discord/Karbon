const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {

if(!ticket.tickets){
   
   ticket = {
      tickets: []
   } 
   
   
   var id = Math.floor(Math.random() * 4000000) + 1000000
   var oof = ticket.tickets;
   oof.append(`${id}`);
   console.log(ticket);
   fs.writeFile('../lotteryticket.json', JSON.stringify(id), err => {
         if(err) console.log(err);
   })
   
    message.reply(`**Your ticket number is: ${id}. **`);

}
   else{
    message.reply("You have already generated a ticket!");
    
    
  }

}

module.exports.help = {
  name: "generate"
}
