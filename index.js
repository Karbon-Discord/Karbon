const Discord = require("discord.js");
const config = require('./botconfig.json');
const token = process.env.token;
const bot = new Discord.Client({disableEveryone:true});
const fs = require("fs");
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
    bot.user.setActivity(`in ${bot.guilds.size} servers`)
})
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('general').send(`Welcome aboard, ${member.user}`);
    
});

// bot.on('guildMemberRemove', member => {
//     bot.defaultChannel.send(`Nooo... ${member.user.username}, has abandoned ship. :slight_frown:`);
// });

bot.on("message", (message) => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
     
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
    
 
})

bot.login(process.env.token);
