const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
  const agree = "✅"
const disagree = "❌"
const a = "🅰"
const b = "🅱"
  const type = args[0];
  const question = args.join(" ");
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no")
  if(!type || !question){
  message.react('🤔');
    message.channel.send("**CORRECT USAGE: --vote [yes/no | option] [time (in ms)] [question] **");
  }
  else{
  let msg = await message.guild.channels.find(`name`, 'vote').send(`<@everyone> **VOTING QUESTION: ${question}? **`)
    if(type === "option"){
        await msg.react(a);
        await msg.react(b);
          const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == a || reaction.emoji.name == b, {time: 2000});
          message.channel.send(`Voting complete! We got ${reactions.get(a).count-1} as the first option, and ${reactions.get(b).count-1} as the second option!`);
          

    }
       else if(type === "yes/no"){
         await msg.react(agree);
        await msg.react(disagree)
    }
    
  }

}



module.exports.help = {
  name: "vote"
}
