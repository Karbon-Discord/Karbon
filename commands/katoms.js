const Discord = require("discord.js");
let katoms = require("../katoms.json");

module.exports.run = async (bot, message, args) => {
  if(!katoms[message.author.id]) {
    message.react("🤔"); 
    message.channel.send(`You have ${katoms[message.author.id].katoms} Katoms!`)
    katoms[message.author.id] = {
       katoms:100
    }
  }
  
  
  else {
       message.channel.send(`You have ${katoms[message.author.id].katoms} Katoms!`)
    
  }    
}

module.exports.help = {
  name: "katoms"
}
