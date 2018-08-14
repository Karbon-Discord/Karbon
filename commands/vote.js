const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
  const agree = "✅"
const disagree = "❌"
  const question = args.join(" ");
  if(!question){
  message.react('🤔');
    message.channel.send("**CORRECT USAGE: --vote [question] **");
  }
  else{
  let msg = await message.guild.channels.find(`name`, 'vote').send(`@everyone **VOTING QUESTION: ${question}?`)
      message.react(agree);
      message.react(disagree)
         await msg.react(agree);
        await msg.react(disagree)
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 1000});
   message.guild.channels.find(`name`, 'vote').send(`**RESULTS ARE IN** ${agree}: ${reactions.get(agree).count() - 1} ${disagree}: ${reactions.get(disagree).count() - 1}`)
        
  }
    

}



module.exports.help = {
  name: "vote"
}
