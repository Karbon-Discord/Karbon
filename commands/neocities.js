const Discord = require('discord.js');
const Neocities = require('neocities');
const request = require('request');
const cheerio = require('cheerio');
const oof = new Neocities() 
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');
          var output = comment.find('.content').first().text().replace(/\s\s+/g, "\n");
          //message.channel.send(output);
          if(!output){
            output = "Looks like he/she doesn't have anything to say at the moment!"
          }
        var views = $('.stat').first().text();
        var followers = $('.stat').first().next().text();
        var updates = $('.stat').first().next().next().text();
        var tips = $('.stat').first().next().next().next().text();
        var lastUpdated = $('.stat').first().next().next().next().next().text();
        var create = $('.stat').first().next().next().next().next().next().text();
            
        }

    })
    
   oof.info(user, resp => {
    var hits = resp.info.hits;
   })
        
        let embed = new Discord.RichEmbed()
        .setTitle(`Neocities stats for ${user}`)
        .setAuthor(`${output}`)
        .setColor("#42f4d7")
        .addField(":eyes: Views", views, true)
        .addField(":dolphin: Followers", followers, true)
        .addField(":construction: Updates", updates, true)
        .addField(":money: Tips", tips, true)
        .addField(":tools: Last Updated", lastUpdated, true)
        .addField(":new_moon_with_face: Created", create, true)
        .addField(":ballot_box_with_check: Hits", hits, true)
    
    
};

module.exports.help = {
  name: "neocities"
}
