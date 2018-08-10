const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');

          var arr = [];

          $('.stat strong').each(function( index ) {
              arr.push($(this).text().trim());
              var views = arr[0];
              var follow = arr[1]
              var update = arr[2]
              var tip = arr[3]
              var lastupdate = arr[4]
              var create = arr[5]
              
              let embed = new Discord.RichEmbed()
        .setTitle(`Neocities stats for ${user}`)
        .setColor("#42f4d7")
        .addField(":eyes: Views", user, true)
        .addField(":dolphin: Followers", follow, true)
        .addField(":construction: Updates", update, true)
        .addField(":money: Tips", tip, true)
        .addField(":tools: Last Updated", lastupdate, true)
        .addField(":new_moon_with_face: Created", create, true);
         message.channel.send(embed)
            
      });

        
        }

    })
    

      
    
    
};

module.exports.help = {
  name: "neocities"
}
