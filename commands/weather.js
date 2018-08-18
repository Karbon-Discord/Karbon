const Discord = require('discord.js');
const fetch = require('node-fetch');
const key = process.env.weather;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("⛈");
    var city = args.join(" ").slice(4)
  //  if(!state){
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data[timezone]);
    let embed = new Discord.RichEmbed()
    .setTitle("WEATHER STATISTICS")
    .addField("Time Zone", data.data.timezone)
//    message.channel.send(embed);
    })
    
//}
}

module.exports.help = {
  name: "weather"
}
