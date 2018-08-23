const Discord = require('discord.js');
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
    message.react(":no_entry:")
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.userNotFound(message);
    let kReason = args.join(" ").slice(22);
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("**The user you requested to be kicked cannot be kicked!**");

   let embed = new Discord.RichEmbed()
      .setDescription(`:no_entry: **${kUser.user.tag}** has been **banned**!`)
      .addField("Banned By:",  `${message.author} (${message.author.id})`)
      .addField("Reason Provided:", kReason)
     .setColor("#000000")
  
    bot.channels.find("id", "478316814963703842").send(embed);
    message.guild.member(kUser).ban(kReason);

}

module.exports.help = {
    name: "ban"
}
