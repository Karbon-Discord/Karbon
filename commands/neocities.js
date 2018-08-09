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
          $('.news-item comment').each((i, el) => {
              const comment = $(el)
              .find('div');
              
              console.log(comment);
          })
        }
    })
    
    
    
    
};

module.exports.help = {
  name: "neocities"
}
