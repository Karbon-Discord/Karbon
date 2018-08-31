const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {

  const phrase = args.join(' ');
    if(phrase) {
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the which category script? This will make the bot go offline for 5-10 minutes.**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes"){
    console.log(phrase);

  const network = new brain.recurrent.LSTM();
 network.train([
        { input: "water", output: "Drink" },
        { input: "juice", output: "Drink" },
        { input: "lemonade", output: "Drink" },
         { input: "coke", output: "Drink" },

        { input: "Los Angeles", output: "Place" },
           { input: "New Delhi", output: "Place" },
           { input: "Lahore", output: "Place" },
           { input: "Seoul", output: "Place" },
         { input: "0", output: "Number" },
           { input: "1", output: "Number" },
                 { input: "2", output: "Number" },
                 { input: "3", output: "Number" },

    ])
  
    const output = network.run(`${phrase}`);
    message.reply(`Category: ${output}`);
    }
else if(response.content === "no") return message.reply(":x: | ** Will not run the script. **")

})
}
module.exports.help = {
  name: "whichcategory"
}


