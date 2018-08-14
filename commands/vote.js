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
  let msg = await message.guild.channels.find(`name`, 'vote').send(`@everyone **VOTING QUESTION: ${question}? You got ${time} seconds!`)
      message.react(agree);
      message.react(disagree)
         await msg.react(agree);
        await msg.react(disagree)
        
    
    
    

}



module.exports.help = {
  name: "vote"
}
