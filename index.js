const Discord = require("discord.js");
const config = require('./botconfig.json');
const token = process.env.token;
const bot = new Discord.Client({disableEveryone:true});
const fs = require("fs");
const mongoose = require('mongoose');
const yellow = config.yellow;
const xp = require('./xp.json');
    const brain = require('brain.js');

bot.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) console.log("Couldn't find the command!");

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

    })

})
bot.on('ready', () => {
    bot.user.setActivity(`in ${bot.guilds.size} servers`);

const network = new brain.recurrent.LSTM();
    network.train([
        { input: ["Warriors", "Thunder"], output: [0] },
        { input: ["Thunder", "Lakers"], output: [1] },
        { input: ["Cavaliers", "Wizards"], output: [1] },
        { input: ["Wizards", "Lakers"], output: [0] },
        { input: ["Warriors", "Raptors"], output: [0] },
    ])

    const output = network.run(["Warriors", "Lakers"]);

    console.log(`Category: ${output}`);
    
if (process.env.dblkey) {
    const DBL = require("dblapi.js");
    const dbl = new DBL(process.env.dblkey, bot);
    
    dbl.postStats(bot.guilds.size);
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);

  } else {
    console.log('Discord Bot List token (dbltoken) was not found in .env! Server counts will not be sent to Discord Bot List.')
  }
})
bot.on('guildMemberAdd', member => {
     if(member.guild.id === "476141277411541012"){
    bot.channels.find("name", "welcome-goodbye").send(`**Welcome aboard, ${member.user}! Please welcome him/her! If you have any questions, feel free to DM one of the Developers or me!** `);
    let embed = new Discord.RichEmbed()
      .setDescription(`:inbox_tray: **${member.user.tag}** has joined the server!`)
      .setFooter("User Joined | Karbon's Lounge", member.user.displayAvatarURL)
       
     .setColor("#42f47d")
  
    .setThumbnail(`${member.guild.iconURL}`);
    bot.channels.find("id", "478309556330430464").send(embed);
    }
    else return;
});

bot.on('guildMemberRemove', member => {
    if(member.guild.id === "476141277411541012"){

    let embed = new Discord.RichEmbed()
      .setDescription(`:outbox_tray: **${member.user.tag}** has left the ship.`)
      .setFooter("User Left | Karbon's Lounge", member.user.displayAvatarURL)
       
     .setColor("#f44262")
  
    .setThumbnail(`${member.guild.iconURL}`);
    bot.channels.find("name", "welcome-goodbye").send(embed);
       }
    else return
});

bot.on("message", (message) => {
    let xpAdd = Math.floor(Math.random() * 30) + 5;
    console.log(xpAdd);
    // if(!xp[message.author.id]){
    //     xp[message.author.id] = {
    //         level:1,
    //         xp:0
    //     }
    // }

    // let curxp = xp[message.author.id].xp;
    // let curlvl = xp[message.author.id].level;
    // let nxtlvl = xp[message.author.id].level * 700;
    // xp[message.author.id].xp = curxp + xpAdd;

    // if(nxtlvl <= xp[message.author.id].xp){
    //     xp[message.author.id].level = curlvl + 1;
    //     message.channel.send(`**Congrats, ${message.author} on leveling up to level ${curlvl}!**`)
       
    // }

    // fs.writeFile('./xp.json', JSON.stringify(xp), err => {
    //     if (err) console.log(err);
    // })

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild]){
        
        prefixes[message.guild] = {
            prefixes:config.prefix
        }
    }



    let prefix = prefixes[message.guild].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
    
 
})

bot.login(process.env.token);
