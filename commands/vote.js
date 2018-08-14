const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
  const agree = "✅"
const disagree = "❌"
  const question = args.join(" ");
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no")
  if(!type || !question){
  message.react('🤔');
    message.channel.send("**CORRECT USAGE: --vote [yes/no | option] [time (in ms)] [question] **");
  }
  else{
  let msg = await message.guild.channels.find(`name`, 'vote').send(`<@everyone> **VOTING QUESTION: ${question}? **`)
        await msg.react(agree);
        await msg.react(disagree);
          const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == agree || reaction.emoji.name == disagree, {time: 2000});
          message.channel.send(`Voting complete! We got ${reactions.get(agree).count-1} as the first option, and ${reactions.get(disagree).count-1} as the second option!`);
     
  }

}



module.exports.help = {
  name: "vote"
}
