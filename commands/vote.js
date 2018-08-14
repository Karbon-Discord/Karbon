const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
let warns = require('../warnings.json');
const agree = "✅"
const disagree = "❌"
const a = "🅰"
const b = "🅱"

module.exports.run = async (bot, message, args) => {
  const type = args[0];
  const time = args[1];
  const question = args.join(" ").slice(22);
  if(!type || !time || !question){
  message.react('🤔');
    message.channel.send("**CORRECT USAGE: --vote [yes/no | option] [time (in ms)] [question] **");
  }
  else{
    message.guild.channels.find(`name`, 'vote').send(`@everyone **VOTING QUESTION: ${question}? You got ${time} seconds!`)
    if(type === "option"){
      message.react(a);
      message.react(b)
    }
        if(type === "yes/no"){
      message.react(agree);
      message.react(disagree)
    }
  }
  
}



module.exports.help = {
  name: "warn"
}
