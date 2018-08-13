const Discord = require('discord.js');
const ffmpeg = require("ffmpeg-binaries")
module.exports.run = async (bot, message, args) => {
   if(message.member.voiceChannel){
      if(!message.guild.voiceConnection){
        message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Successfully joined the voice channel!");
        })
        
      }
   }
   
   else{
      message.reply("You need to be in a voice channel before summoning me!")
   }
};

module.exports.help = {
  name: "join"
}
