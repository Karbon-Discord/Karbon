const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
   if(!ticket.tickets){
   ticket = {
      tickets: []
   }
 }
   
   else{
    //  var oof = ticket.ticketid;
    //  console.log(oof);
      console.log(ticket);
 }
  
// message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
