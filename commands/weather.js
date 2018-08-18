const Discord = require('discord.js');
const fetch = require('node-fetch');
const key = process.env.weather;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("⛈");
    var city = args[0].splice(1).join(" ")
    var state = args[1]
    if(!state){
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })
}
}

module.exports.help = {
  name: "weather"
}
