const Discord = require('discord.js');
const fetch = require('node-fetch');
const key = process.env.weather;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("⛈");
    var city = args.join(" ").slice(1)
    console.log(city);
  //  if(!state){
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data[0].timezone);
    let embed = new Discord.RichEmbed()
    .setTitle("WEATHER STATISTICS")
    .setColor("#1eaefc")
    .addField("Time Zone", data.data[0].timezone)
    .addField("Temperature (Celcius)", data.data[0].temp)
    .addField("Appearance", data.data[0].weather.description)
    .addField("Precipitation", `${data.data[0].precip}%`)
    .addField("Wind Direction", data.data[0].wind_cdir)
    .addField("UV Index", data.data[0].uv)
    message.channel.send(embed);
    })
    
//}
}

module.exports.help = {
  name: "weather"
}
