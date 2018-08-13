const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   message.react(":x:")
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Sorry, but you cannot kick that person!**");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("**The user you requested to be kicked cannot be kicked!**");

   let embed = new Discord.RichEmbed()
      .setDescription(`:x: **${kUser.user.tag}** has been kicked!`)
      .addField("Kicked By:",  `${message.author} (${message.author.id})`)
      .addField("Reason Provided:", kReason)
     .setColor("#f44262")
  
    bot.channels.find("id", "478316814963703842").send(embed);
    message.guild.member(kUser).kick(kReason);

}

module.exports.help = {
    name: "kick"
}
