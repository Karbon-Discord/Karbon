const Discord = require('discord.js');
const Neocities = require('neocities');
const request = require('request');
const cheerio = require('cheerio');
const oof = new Neocities() 
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/?activity=${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const arrcmt = [];
          $('.stat strong').each(function( index ) {
        arrcmt.push($(this).text().trim());
      });
            
        }
    })
    
    
    
    
};

module.exports.help = {
  name: "neocities"
}
