const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    var views, follow, update, tip, lastupdate, create;
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');

          var arr = [];

          $('.stat strong').each(function( index ) {
              arr.push($(this).text().trim());
              views = arr[0];
              follow = arr[1]
              update = arr[2]
              tip = arr[3]
              lastupdate = arr[4]
              create = arr[5]
            
      });
 let embed = new Discord.RichEmbed()
        .setTitle(`Neocities stats for ${user}`)
        .setColor("#42f4d7")
        .addField(":eyes: Views", views, true)
        .addField(":dolphin: Followers", follow, true)
        .addField(":construction: Updates", update, true)
        .addField(":money_with_wings:  Tips", tip, true)
        .addField(":tools: Last Updated", lastupdate, true)
        .addField(":new_moon_with_face: Created", create, true);
         message.channel.send(embed)
        
        }

    })
    

      
    
    
};

module.exports.help = {
  name: "neocities"
}
