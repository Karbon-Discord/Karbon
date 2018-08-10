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
              console.log(arr);
      });

        let embed = new Discord.RichEmbed()
        .setTitle(`Neocities stats for ${user}`)
        .setColor("#42f4d7")
        .addField(":eyes: Views", arr[0], true)
        .addField(":dolphin: Followers", arr[1], true)
        .addField(":construction: Updates", arr[2], true)
        .addField(":money: Tips", arr[3], true)
        .addField(":tools: Last Updated", arr[4], true)
        .addField(":new_moon_with_face: Created", arr[5], true);
         message.reply(embed)
            
        }

    })
    

      
    
    
};

module.exports.help = {
  name: "neocities"
}
