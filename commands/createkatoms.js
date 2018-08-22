const Discord = require("discord.js");
let katoms = require("../katoms.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
 
 
 if(!katoms[message.author.id]){
    message.channel.send("**You now can earn Katoms!**")
    katoms[message.author.id] = {
      katoms:100
    }
  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
  })
 }
};

module.exports.help = {
  name: "createkatoms"
}
