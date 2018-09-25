const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs');


client.on('ready', () => {
    console.log('----------------');
    console.log('By TaQa8');
    console.log('----------------');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(` $help | ON ${client.guilds.size}  Servers `, "http://twitch.tv/Streammingg")
    client.user.setStatus("dnd")
});

client.on("message", message => {
    if (message.content === "$help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
  =========================
   For welcome and goodbye massage 
   Just create channel called
   welcome
   and the bot will welcome new members
   =========================
    For autorole
Just change the name of normal members to
   MEMBER
   Then anyone who join your server will get  
   MEMBER
   
   =========================
   `)


        message.author.sendEmbed(embed)

    }
});


var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#bc | osama tech`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});







client.on("message", message => {
    if (message.content === "$help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   :earth_africa: general commands :earth_africa: 
   =================
   link | to get an invite link of the server your pn
   =================
   $inv | to invite the bot to your server
   =================
   $servers | to show you all the servers we have the bot on
   =================
   $id | show you some info about your account
   =================
   $ping | to show you the speed of the bot
   =================
   $bot | to show you how many users and servers use the bot
   =================
   $info | to show you information about the bot
   =================
   $server | to show you some information about the server
   =================
   $mb | to show you info about the members on the server
   =================
   $av  , $av {@user} | to show you the avatar of someone
   =================
   $as | to show you the server avatar
   =================
   $embed {text} | to repeat what you said in box
   ================
   $bans | to show you how many banned on your server
   =================
   $user2 | it will show you how long have you been on discord and the server your on
  
   `)


        message.author.sendEmbed(embed)

    }
});




client.on("message", message => {
    if (message.content === "$help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   :sleuth_or_spy::skin-tone-1: admins commands  :sleuth_or_spy::skin-tone-1:
   =================
   $kick {@user} {reason} | to kick members
   =================
   $ban {@user} {reason} | to ban members
   =================
   $mute {@user} {reason} | to mute members
   =================
   $unmute {@user} | to unmute members
   =================
   $clear {number} | to clear the chat with the amount you want
   =================
   $discrim | to show you people with the same tag you have
   
   `)


        message.author.sendEmbed(embed)

    }
});




client.on("message", message => {
    if (message.content === "$help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`
                 Bot creator and developer
              [  Star  ]
 ====:blossom:we hope you enjoy the bot  :blossom:====
   `)


        message.author.sendEmbed(embed)

    }
});





//-------------------------------------help



//-------------------------------------bot

client.on('message', message => {
    if (message.content === "$bot") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`**Servers**ðŸŒ **__${client.guilds.size}__**
**Users**ðŸ‘¥ **__${client.users.size}__**
**Channels**ðŸ“š **__${client.channels.size}__** `)
        message.channel.sendEmbed(embed);
    }
});

//-------------------------------------bot


//-------------------------------------dm !!

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``i have new massage on my dms ! ``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`from (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("0").send({ embed: iiMo });
    }
});

//-------------------------------------ÙÙŠ Ø±Ø³Ø§Ù„Ù‡ Ø¨ Ø§Ù„Ø®Ø§Ø§Øµ !!

//-------------------------------------Ø¨server bc


//----------------------------------- server bc

//-------------------------------------kick
var prefix = "$"
client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "kick") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        /*let b5bzlog = client.channels.find("name", "5bz-log");

        if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
        if (message.mentions.users.size < 1) return message.reply("**mention the user**");
        if (!reason) return message.reply("**say the reason**");
        if (!message.guild.member(user)
            .kickable) return message.reply("**i cant kick people who have higher role than me**");

        message.guild.member(user).kick();

        const kickembed = new Discord.RichEmbed()
            .setAuthor(`KICKED!`, user.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
        message.channel.send({
            embed: kickembed
        })
    }
});
//-------------------------------------kick

//-------------------------------------ban
var prefix = "$"
client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "ban") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        /*let b5bzlog = client.channels.find("name", "5bz-log");

        if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
        if (message.mentions.users.size < 1) return message.reply("**mention the user**");
        if (!reason) return message.reply("**say the reason**");
        if (!message.guild.member(user)
            .bannable) return message.reply("**i cant ban people who have higher role than me**");

        message.guild.member(user).ban(7, user);

        const banembed = new Discord.RichEmbed()
            .setAuthor(`BANNED!`, user.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
        message.channel.send({
            embed: banembed
        })
    }
});

//-------------------------------------ban





//-------------------------------------say

//deleted.

//-------------------------------------say


//-------------------------------------members description

client.on('message', message => {
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: members description **
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});

//-------------------------------------Ø­Ø§Ù„Ù‡ Ø§Ù„Ø£Ø¹Ø¶Ø§Ø¹

//-------------------------------------Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±

client.on('message', message => {
    if (message.content === "$server") {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();

        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**ðŸ†” server id**", "**" + message.guild.id + "**", true)
            .addField("**ðŸ‘‘ server owner**", "**" + message.guild.owner + "**", true)
            .addField("**âœ… main chat**", "**" + message.guild.DefaultChannel + "**", true)
            .addField("**ðŸŒ location**", "**" + message.guild.region + "**", true)
            .addField('**ðŸ’¬ count of chatting rooms **', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**ðŸ“¢voice channels count**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**ðŸ¤” for how long has been the server up for **", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**ðŸ‘” roles**", `**[${message.guild.roles.size}]** Role `, true)
            .addField("**ðŸ’  server protection lvl**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `, true)

        .addField("ðŸ‘¥memebers count ", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    }
});

//-------------------------------------Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±


//-------------------------------------Ø§ÙŠØ¯ÙŠ

client.on("message", msg => {
    var prefix = "$";
    if (msg.content.startsWith(prefix + "id")) {
        if (!msg.channel.guild) return msg.reply('**:x: sorry this command only works on servers **');
        const embed = new Discord.RichEmbed();
        embed.addField(":cloud_tornado:  name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
            .addField(":id:  id", `**[ ${msg.author.id} ]**`, true)
            .setColor("RANDOM")
            .setFooter(msg.author.username, msg.author.avatarURL)
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField(':spy:  status', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
            .addField(':satellite_orbital:   plays', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
            .addField(':military_medal:  roles', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
            .addField(':robot:  is it a bot?', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
        msg.channel.send({ embed: embed })
    }
});
//-------------------------------------Ø§ÙŠØ¯ÙŠ

//-------------------------------------Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª
client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if (!message.channel.guild) return message.reply('**:x: sorry this command only works on servers **');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**âš   you have to have manage messages on your role to do this command **');
        var msg;
        msg = parseInt();

        message.channel.fetchMessages({ limit: msg }).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {
            embed: {
                title: "``chat has been cleared ``",
                color: 0x06DF00,
                footer: {

                }
            }
        }).then(msg => { msg.delete(3000) });
    }


});
//-------------------------------------Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª


//-------------------------------------Ø§Ù„ØµÙˆØ±Ù‡ Ø§Ù„Ø´Ø®ØµÙŠÙ‡

client.on('message', message => {
    if (message.content.startsWith("$av")) {
        var mentionned = message.mentions.users.first();
        var x5bzm;
        if (mentionned) {
            var x5bzm = mentionned;
        } else {
            var x5bzm = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
        message.channel.sendEmbed(embed);
    }
});

//-------------------------------------Ø§Ù„ØµÙˆØ±Ù‡ Ø§Ù„Ø´Ø®ØµÙŠÙ‡

//-------------------------------------ØµÙˆØ±Ù‡ Ø§Ù„Ø³ÙŠØ±ÙØ±

client.on("message", message => {
    const prefix = "$"

    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content === prefix + "as") {
        const embed = new Discord.RichEmbed()

        .setTitle(`this is the server avatar ** ${message.guild.name} **`)
            .setAuthor(message.author.username, message.guild.iconrURL)
            .setColor("RANDOM")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()

        message.channel.send({ embed });
    }
});

//-------------------------------------ØµÙˆØ±Ù‡ Ø§Ù„Ø³ÙŠØ±ÙØ±

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

//-------------------------------------Ø¨Ù†Ù‚

client.on("message", message => {
      if (message.content === "$ping") {
        const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
	.setTitle('**Pong ! **')
  .addField('**My Ping Is**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

//-------------------------------------Ø¨Ù†Ù‚

//-------------------------------------Ø§ÙŠÙ…Ø¨ÙŠØ¯

var prefix = "$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

//-------------------------------------Ø§ÙŠÙ…Ø¨ÙŠØ¯

//-------------------------------------Ø±Ø³Ø§Ù„Ù‡ Ù„ÙƒÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª



//-------------------------------------Ø±Ø³Ø§Ù„Ù‡ Ù„ÙƒÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª

//-------------------------------------Ø§Ù„Ù‡ÙŠÙ„Ø¨ Ø¨ Ø§Ù„Ø´Ø§Øª
    client.on('message', message => {
        if (message.content === '$help') {
          const embed = new Discord.RichEmbed() 
          .setColor("RANDOM")
              .setThumbnail(message.author.avatarURL)
        message.channel.sendMessage(embed);
        message.author.sendEmbed(embed)
        message.reply('**check your dms :envelope_with_arrow:**')
        }
        });
//-------------------------------------Ø§Ù„Ù‡ÙŠÙ„Ø¨  Ø¨   Ø§Ù„Ø´Ø§Øª
    
//-------------------------------------Ø³ØªØ§ØªØ³
client.on('message', message => {
    if (message.content.startsWith("$info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO star`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ $ ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | star')
    })
}
});
//-------------------------------------Ø³ØªØ§ØªØ³

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


//-------------------------------------Ù…ÙŠÙˆØª
client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "$mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** you dont have permission   'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø±ØªØ¨Ø© Ø§Ù„Ù…ÙŠÙˆØª 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** ÙŠØ¬Ø¨ Ø¹Ù„ÙŠÙƒ Ù…Ù†Ø´Ù†Øª Ø´Ø®Øµ Ø§ÙˆÙ„Ø§Ù‹**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('how to use:', 'mute/unmutr')
            .addField('ØªÙ… Ù…ÙŠÙˆØª:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('Ø¨ÙˆØ§Ø³Ø·Ø©:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù„Ø¯ÙŠ Ø¨Ø±Ù…Ø´Ù† Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. user has been muted**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. ØªÙ… Ø§Ø¹Ø·Ø§Ø¡ Ø§Ù„Ø¹Ø¶Ùˆ Ù…ÙŠÙˆØª ÙƒØªØ§Ø¨ÙŠ**").catch(console.error);
            });
        }

    };

});
  
//-------------------------------------Ù…ÙŠÙˆØª

//-------------------------------------ÙÙƒ Ù…ÙŠÙˆØª

client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "$unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù„Ø¯ÙŠÙƒ Ø¨Ø±Ù…Ø´Ù† 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù„Ø¯ÙŠÙƒ Ø±ØªØ¨Ù‡ Ø§Ù„Ù…ÙŠÙˆØª 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** ÙŠØ¬Ø¨ Ø¹Ù„ÙŠÙƒ Ù…Ù†Ø´Ù†Øª Ø´Ø®Øµ Ø§ÙˆÙ„Ø§Ù‹**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('Ø§Ù„Ø£Ø³ØªØ¹Ù…Ø§Ù„:', 'Ø§Ø³ÙƒØª/Ø§Ø­ÙƒÙŠ')
            .addField('ØªÙ… ÙÙƒ Ø§Ù„Ù…ÙŠÙˆØª Ø¹Ù†:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('Ø¨ÙˆØ§Ø³Ø·Ø©:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù„Ø¯ÙŠ Ø¨Ø±Ù…Ø´Ù† Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. ØªÙ… ÙÙƒ Ø§Ù„Ù…ÙŠÙˆØª Ø¹Ù† Ø§Ù„Ø´Ø®Øµ **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. ØªÙ… ÙÙƒ Ø§Ù„Ù…ÙŠÙˆØª Ø¹Ù† Ø§Ù„Ø´Ø®Øµ **").catch(console.error);
            });
        }

    };

});

//-------------------------------------ÙÙƒ Ù…ÙŠÙˆØª

  
//-------------------------------------ØªÙ… Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø®Ø±ÙˆØ¬Ù‡
    
    client.on("guildCreate", guild => {
    client.channels.get("0 ").send(`**star** has been **added** :white_check_mark: from this server **(${guild.name})** , Server Owner ðŸ‘‘ **(${guild.owner.user.username})**`)
    });
    
    client.on("guildDelete", guild => {
    client.channels.get(" 0").send(`**star** has been **removed** :x: from this server **(${guild.name})** , Server Owner ðŸ‘‘ **(${guild.owner.user.username})**`)
    });

//-------------------------------------Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø®Ø±ÙˆØ¬Ù‡

//------------------------------------- Ø±Ø³Ø§Ù„Ù‡ ÙÙŠ Ø§Ù„Ø®Ø§Øµ Ù„Ù„Ø£ÙˆÙ†Ø±

    client.on('guildCreate', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**thx for adding the bot to your server :blush:**`)
            guild.owner.send(embed)
      });

      client.on('guildDelete', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**we hope that you will injoy the bot :wink:**`)
            guild.owner.send(embed)
      });

//-------------------------------------Ø±Ø³Ø§Ù„Ù‡ ÙÙŠ Ø§Ù„Ø®Ø§Øµ Ù„Ù„Ø£ÙˆÙ†Ø±

  

//-------------------------------------ØªØºÙŠØ± Ø¨Ø¯ÙˆÙ† Ø§Ø·ÙØ§Ø¡

client.on('message', message => {
var prefix = "$";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 256842739864436748) return;


if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠÙŠØ± Ø§Ù„Ø­Ø§Ù„Ø©`)
} else

 
if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :ØªÙ… ØªØºÙŠÙŠØ± Ø§Ù„Ø­Ø§Ù„Ø© Ø§Ù„Ù‰ Ø³ØªØ±ÙŠÙ…Ù†Ø¬`)
} else

if (message.content.startsWith(prefix + 'set-name')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠØ± Ø§Ù„Ø£Ø³Ù…`)
  return message.reply("**Ù„Ø§ ØªØ³ØªØ·ÙŠØ¹ ØªØºÙŠØ± Ø§Ù„Ø£Ø³Ù… Ø§Ù„Ø§ Ø¨Ø¹Ø¯ Ø³Ø§Ø¹ØªÙŠÙ†**");
} else
    
if (message.content.startsWith(prefix + 'set-avatar')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')    
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠØ± ØµÙˆØ±Ø© Ø§Ù„Ø¨ÙˆØª`);
} else
	
if (message.content.startsWith(prefix + 'listening')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
client.user.setActivity(argresult, {type:'listening'});
    message.channel.sendMessage(`**${argresult} : ØªÙ… ØªØºÙŠØ± Ø§Ù„Ù„Ø³ØªÙŠÙ†Ù‚ Ø§Ù„Ù‰**`)
} else

if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù‚ÙØ· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠÙŠØ± Ø§Ù„ÙˆÙˆØªØ´ÙŠÙ†Ù‚ Ø§Ù„Ù‰`)
}
 
 });
//-------------------------------------ØªØºÙŠØ± Ø¨Ø¯ÙˆÙ† Ø§Ø·ÙØ§Ø¡


//games






//-------------------------------------ÙˆÙ„ÙƒÙ…

      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`Ø§Ù‡welcomeÙ‹ :raised_hand::skin-tone-1: :smiley:` , `welcome :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`welcome to the server ðŸ™ƒ` , `welcome to the server :blush:`)
        .addField(' :bust_in_silhouette:  you are numberÙ…',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('==== we hope you have fun anywhere you are ====', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`have fun :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`god be with you :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   left',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== we hope you have fun anywhere you are ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    }) 
//------------------------------------- Ø§Ù„Ù…ØºØ§Ø¯Ø±Ù‡


//-------------------------------------Ø§Ù„Ø£ØºØ§Ù†ÙŠ ÙŠÙ„Ø¯





//..........

//-------------------------------------


//inv
      client.on('message', message => {
        if (message.content === "$inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: click here`)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=470227351733534720&permissions=2080374975&scope=bot `)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")
        .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
     message.channel.sendEmbed(embed);
       }
   });
//inv

//servers
client.on('message' , message => { 
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***servers count  ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
//servers



//auto role

//------------------
client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    console.log(`[INFO] ${client.user.username}`)
    console.log(`[INFO] ${client.users.size}`)
    console.log(`[INFO] ${client.guilds.size}`)
    console.log(`[BOT] Auto Role `)
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'MEMBER'));
});

//auto role

//link

client.on('message', message => {
    if (message.content.startsWith("link")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  check your dms  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
				.setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  this is the server link
---------------------
-this link can be used by 100 members only
---------------------
-this link is available for 24 hours only
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
//link



var prefix = "$";






client.on('message' , message => {
var prefix = "$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("256842739864436748 ").send(
    "\n" + "**" + "â— server :" + "**" +
    "\n" + "**" + "Â» " + message.guild.name + "**" +
    "\n" + "**" + " â— sender : " + "**" +
    "\n" + "**" + "Â» " + message.author.tag + "**" +
    "\n" + "**" + " â— massage : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(' âœ… | massage has been sent ')
     .setThumbnail(message.author.avatarURL)
                                                

message.channel.send(embed);


}
    
});
//================================================================================================================ghultich!!





client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+moha')){
if (message.author.id !== '459694984942321664') return message.reply('** Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± ÙÙ‚Ø· Ù„ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª Ùˆ Ø´ÙƒØ±Ø§Ù‹Ù‹ **')
message.channel.sendMessage('Ø¬Ø§Ø± Ø§Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø³Ø§Ù„Ø© |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});





 client.on('message', message => {
if(message.content.startsWith('-discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
          var args = message.content.split(" ").slice(1);
    let sent = 0
    let count = 1;
    
      if(args){
client.users.filter(u => u.discriminator == args[0]).forEach(u => {
    if(sent > 4){
     return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}âž¥ ${u.tag}**
         
      `)
      count++;
})
}
}
if(message.content ===('$discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
    let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}âž¥ ${u.tag}**
         
      `)
      count++;
})
}
});





client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});



client.on('message', message => {
           if (message.content.startsWith(prefix + "user2")) {
                     if(!message.channel.guild) return message.reply(`you cant do this here âŒ`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('en-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': joined discord ',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': join the server', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });




client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "role")) {
    if(!args) return message.reply('say the name of the role');
    if(!role) return message.reply('there is no role with this name');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- role name',role.name,true)
    .addField('- role id',role.id,true)
    .addField('- created ',role.createdAt.toLocaleString(),true)
    .addField('- role color',role.hexColor,true)
    .addField('- memebers who have this role ',role.members.size,true)
    .addField('-role position ',role.position,true)
    .addField('- role premissions',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});




//-------------------------------------Øª
client.login(process.env.BOT_TOKEN);
