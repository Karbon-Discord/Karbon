const Discord = require("discord.js");
let storage = require("../storage.json");

try {
module.exports.run = async (bot, message, args) => {
  if(!storage[message.author.id].ticket) {
    message.react("🤔"); 
    return message.reply("**You do not have a lottery ticket! Feel free to generate one. | --generate");
  }
  else {
    message.react("🎫")
    return message.reply(`:ticket: | **Your ticket number is: ${storage[message.author.id].ticket}**`)
    
  }    
}
catch(err) {
  message.reply("There has been an errawr: " + err.code + ": " + err.message);
}
}

module.exports.help = {
  name: "ticket"
}
