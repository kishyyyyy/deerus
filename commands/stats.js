const Discord = require('discord.js');
const config = require("../config.json");
module.exports = {
    name: "stats", // Command Name.
    aliases: ["st"], // Aliases.
    usage: " ", // Usage.
    cooldown: 5, // Cooldown In Seconds.
    guildOnly: false, // If Command In DMs. (true/false)
    admin: false, // Bot Admin Only. (true/false)
    async execute(message, args, client) {
        let prefix = config.prefix
         const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setTitle('★ Deerus Statistics ★')
            .addField('Servers', `\`\`${client.guilds.cache.size}\`\``, true)
            .addField('Users (Not Accurate)', `\`\`${client.users.cache.size}\`\``, true)
            .addField('Memory', `\`\`24 GB\`\``, true)
            .addField('Deerus Version', '\`\`BETA\`\`', true)
            .addField('Creation Date', '\`\`December 24, 2021\`\`', true)
            .addField('Creator', '\`\`Kishy\`\`', true)
            .setThumbnail('https://media.discordapp.net/attachments/927077695047745597/927077984777678899/deerus1.png?width=515&height=515')
        message.channel.send(embed)
      }
    };
    
