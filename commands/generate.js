const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {

if(!ticket[message.author.id]){
      var id = Math.floor(Math.random() * 4000000) + 1000000
   ticket[message.author.id] = {
      ticketid: []
   } 
      if(message.author.id === "357307569397694466"){
      var oof = ticket[message.author.id].ticketid;
      oof.push(id);
      console.log(oof);
      console.log(ticket.ticketid);
}
      else return;
fs.writeFile('../lotteryticket.json', JSON.stringify(id), err => {
         if(err) console.log(err);
   })
   
//    var oof = ticket.tickets;
//    oof.push('["id": ${message.author.id}, "ticket": ${id}]');
//    if(ticket.tickets.id[message.author.id]) console.log('oof');
   
 
    message.reply(`**Your ticket number is: ${id}. **`);

}
   else{
    message.reply("You have already generated a ticket!");
    
    
  }

}

module.exports.help = {
  name: "generate"
}
