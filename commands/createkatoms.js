const Discord = require("discord.js");
let katoms = require("../katoms.json");
module.exports.run = async (bot, message, args) => {
 
 
 if(!katoms[message.author.id]){
    message.channel.send("**You now can earn Katoms!**")
    katoms[message.author.id] = {
      katoms:100
    }
 }
};

module.exports.help = {
  name: "createkatoms"
}
