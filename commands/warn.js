const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
let warns = require('../warnings.json');

module.exports.run = async (bot, message, args) => {
message.react('⚠');
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You cannot do that!");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!wUser) return message.reply("**Couldn't find them!**");
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("**No, they are too cool to be warned.**");
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
}

warns[wUser.id].warns++;

fs.writeFile("../warnings.json", JSON.stringify(warns), err => {
  if(err) console.log(err);
})

let embed = new Discord.RichEmbed()
      .setDescription(`:warning: **${wUser.user}** has been warned!`)
      .addField("Warned By:",  `${message.author} (${message.author.id})`)
      .addField("Reason Provided:", reason)
      .addField("Number of Warnings", warns[wUser.id].warns)
     .setColor("#f4f442");
     
 bot.channels.find("id", "478316814963703842").send(embed);

if(warns[wUser.id].warns === 3){
  let muterole = message.guild.roles.find(`name`, "Muted");
  wUser.addRole(muterole);
  if(!muterole){
    muterole = message.guild.createRole({
      name: "Muted",
      color: "#41a3f4",
      permissions: []
    })
    message.guild.channels.forEach(async (channel, id) => {
        await channel.overridePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })
    }) 
    
    let mutetime = "20m";
    await(wUser.addRole(muterole.id));
    setTimeout(() => {
      wUser.removeRole(muterole.id);
    })
}
}
  
  if(warns[wUser.id].warns === 4){
   wUser.kick(reason) 
    
   let embed = new Discord.RichEmbed()
      .setDescription(`:x: **${wUser.user.tag}** has been kicked!`)
      .addField("Kicked By:",  `${message.author} (${message.author.id})`)
      .addField("Reason Provided:", reason)
     .setColor("#f44262")
  
    bot.channels.find("id", "478316814963703842").send(embed);
    message.guild.member(kUser).kick(kReason);
  }
  
  
}



module.exports.help = {
  name: "warn"
}
