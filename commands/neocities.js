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
          $('.stat strong').foreach(function(){;
          arrcmt.push($(stats).text().trim());
            console.log(arrcmt)
})
            
        }
    })
    
    
    
    
};

module.exports.help = {
  name: "neocities"
}
