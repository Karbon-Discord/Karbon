const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
  const agree = "✅"
const disagree = "❌"
const a = "🅰"
const b = "🅱"
  const type = args[0];
  const question = args.join(" ");
  if(!type || !question){
  message.react('🤔');
    message.channel.send("**CORRECT USAGE: --vote [yes/no | option] [time (in ms)] [question] **");
  }
  else{
  let msg = await message.guild.channels.find(`name`, 'vote').send(`@everyone **VOTING QUESTION: ${question}? You got ${time} seconds!`)
    if(type === "option"){
      message.react(a);
      message.react(b);
        await msg.react(a);
        await msg.react(b)
    }
       else if(type === "yes/no"){
      message.react(agree);
      message.react(disagree)
         await msg.react(agree);
        await msg.react(disagree)
    }
  }

}



module.exports.help = {
  name: "vote"
}
