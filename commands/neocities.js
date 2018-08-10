const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');

            
          var stat = $('.stats').text()
          console.log(stat)
        var views = $('.stat').first().text();
        var followers = $('.stat').first().next().text();
        var updates = $('.stat').first().next().next().text();
        var tips = $('.stat').first().next().next().next().text();
        var lastdate = $('.stat').first().next().next().next().next().text();
        var createww = $('.stat').first().next().next().next().next().next().text();
            console.log(create)
 //         console.log(create)
//         let embed = new Discord.RichEmbed()
//         .setTitle(`Neocities stats for ${user}`)
//         .setColor("#42f4d7")
//         .addField(":eyes: Views", views, true)
//         .addField(":dolphin: Followers", followers, true)
//         .addField(":construction: Updates", updates, true)
//         .addField(":money: Tips", tips, true)
//         .addField(":tools: Last Updated", lastUpdated, true)
//         .addField(":new_moon_with_face: Created", create, true);
//          message.reply(embed)
            
        }

    })
    

      
    
    
};

module.exports.help = {
  name: "neocities"
}
