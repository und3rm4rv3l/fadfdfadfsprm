const Discord = require("discord.js");
const client  = new Discord.Client();
const config  = require("./config.json");
const fs      = require("fs");
const YTDL = require('ytdl-core');
const modRole = ('Administrator');
var database = require("./database.js");
const db = require('quick.db');
const moment = require('moment');
let reload    = require('require-reload')(require),
	utils     = reload('./utils/utils.js'),
	comandos  = require('./utils/comandos.js'),
	logger    = new (require('./utils/Logger.js'))(config.logTimestamp);

 
 client.on("error", (e) => console.log(e));
  client.on("warn", (e) => console.log(e));
  client.on("debug", (e) => console.log(e));


client.on("ready", () => {
client.user.setPresence({
        status: 'Online',
        game: {
            name: `s!help`,
            url: 'https://www.twitch.tv/expextreadriano'
        }
});
});

module.exports = {
	task(client, message, name) {
		if (name) {
			let comando = reload(`./comandos/${name}.js`);
			comando.usersOnCooldown = new Set();
			comandos.set(name, comando);
			return message.reply(`:cyclone: | O Comando ** ${name}** foi atualizado!`);
		} else
			return message.reply('Especifique um comando');
	}
};


fs.readdir("./comandos/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(name => {
		let nome = name.split('.')[0];
		require(`./comandos/${name}`).usersOnCooldown = new Set();
		comandos.set(nome, require(`./comandos/${name}`));
	});
});

  

client.on('ready', () => {
 var a = '244489368717230090';
var embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/429458467988832257/469723736300453901/SysopLogo.png')
    .setDescription(`<:SysopLogoEMOI:439565791357042700> Sysop foi reiniciado pelo heroku.\n\nSysopGuide reiniciado pelo clound9.\n\nMemória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MS`)
    .setColor(0x0df7eb);  							 
    client.users.get(a).send({embed});    
    
});

client.on("ready", () => {
   logger.logWithHeader('Estamos online!', 'bgRed', 'black',  `Online! S:${client.guilds.size} | U:${client.users.size}`);
});


module.exports = {
	task(client, message, name) {
	database.Guilds.findOne({"_id": message.guild.id}, function(erro, documento) {
        if (documento) return;
		if (!documento && documento.sugestao && message.channel.id == documento.sugestao)
	    message.react('439601495621763083').then(message.react('439601513472458752').then(
	    message.react('459002752891355147'))).catch(e => console.log(e));
	    
    });
	}};

const DBL = require ("dblapi.js");
const dbl = new DBL (config.DBL);

client.on ('ready', () => {
  setInterval (() => {
      dbl.postStats (client.guilds.size);
  }, 18000);
});

var slowCol = new Set();
client.on("message", (message) => {
   	
	    if (message.author.bot) return;
	
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, sysop) {
	    	    
        if (!sysop) return 
        if (!sysop.slow) return 
        if (sysop) {
            if (sysop.slow === 1) return 
            if (!slowCol.has(message.author.id)) {
                slowCol.add(message.author.id);
                setTimeout(() => {
                    slowCol.delete(message.author.id)
                }, sysop.slow * 1000);
            } else {
                message.delete()
            }
        } else {
            if (!sysop) return 
            console.log("erro");
        }
    });
});


client.on('guildMemberAdd', (member) => {	
if (member.guild) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop.autorole) {
member.addRole(sysop.autorole);
sysop.save();
}}
});
}
});

client.on('guildMemberAdd', member => { 
 /* database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.welcomeChannel) return;
    if(!sysop.welcome) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel)) return;
  if (sysop) {
    let mensagem = sysop.welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    client.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel).send(mensagem)

    }
  })
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.dm) return;
  if (sysop) {
    let mensagem = sysop.dm.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    client.users.get(member.id).send(mensagem)
  }
  })*/

	//contador + setador
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.numero) return;
    if (!sysop.texto) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.numero)) return;	
if (sysop) {	
let membros =  `${client.guilds.get(member.guild.id).memberCount.toString()}`
let discord = membros.split('').map(i => ['<:00:486163080037007361> ', '<:11:486163136307658752>', '<:22:486163135993217035>', '<:33:486163136127303683>', '<:44:486163136874020864>', '<:55:486163135909068812>', '<:66:486163136873758740>', '<:77:486163136815169540>', '<:88:486163135938560013>', '<:99:486163157790883851>'][i]).join('');
client.guilds.get(member.guild.id).channels.get(sysop.numero).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${discord} ${sysop.texto}` })
	}})	
});

client.on('guildMemberAdd', member => {
//contador animado + setador
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.animado) return;
    if (!sysop.texto) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.animado)) return;	
if (sysop && sysop.animado) {	
let membross =  `${client.guilds.get(member.guild.id).memberCount.toString()}`
let contadora = membross.split('').map(i => ['<a:0:478771135388057602>', '<a:1:478771131030175746>', '<a:2:478771135714951169>', '<a:3:478771135865946130>', '<a:4:478771135454904335>', '<a:5:478771136247627806>', '<a:6:478771169441349632>', '<a:7:478771167382208524>', '<a:8:478771170263564288>', '<a:9:478771170557165578>'][i]).join('');
client.guilds.get(member.guild.id).channels.get(sysop.animado).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${contadora} ${sysop.texto}` })
}})
});

client.on('guildMemberAdd', (member) => {
    database.Guilds.findOne({ 
        "_id": member.guild.id
    }, function (erro, sysop) {
        if (!sysop || !sysop.filtrof || !client.guilds.get(member.guild.id).channels.get(sysop.filtrof)) 
            return;
        else {
            let daysJoined = moment().diff(member.user.createdAt, 'days');
            console.log('Chegou aqui oh!')
            if (daysJoined <= 6)
                client.guilds.get('441766085809799198').channels.get('483775115599806477').send(`:warning: | Suposta conta fake encontrada. Atende pelo nome de ${member} em um tempo ativo de ${daysJoined} dias no Discord.`);
        }
        
    });
});

client.on('guildMemberRemove', member => {

  /*database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.byeChannel) return;
    if(!sysop.bye) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.byeChannel)) return;
  if (sysop) {
    let mensagem = sysop.bye.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    client.guilds.get(member.guild.id).channels.get(sysop.byeChannel).send(mensagem)
  }
  })*/
	

//contador + setador
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.numero) return;
    if (!sysop.texto) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.numero)) return;	
if (sysop && sysop.numero) {	
let membros =  `${client.guilds.get(member.guild.id).memberCount.toString()}`
let discord = membros.split('').map(i => ['<:00:486163080037007361> ', '<:11:486163136307658752>', '<:22:486163135993217035>', '<:33:486163136127303683>', '<:44:486163136874020864>', '<:55:486163135909068812>', '<:66:486163136873758740>', '<:77:486163136815169540>', '<:88:486163135938560013>', '<:99:486163157790883851>'][i]).join('');
client.guilds.get(member.guild.id).channels.get(sysop.numero).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${discord} ${sysop.texto}` })
	}})	

});

client.on('guildMemberRemove', member => {
//contador animado + setador
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.animado) return;
    if (!sysop.texto) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.animado)) return;	
if (sysop && sysop.animado) {	
let membross =  `${client.guilds.get(member.guild.id).memberCount.toString()}`
let contadora = membross.split('').map(i => ['<a:0:478771135388057602>', '<a:1:478771131030175746>', '<a:2:478771135714951169>', '<a:3:478771135865946130>', '<a:4:478771135454904335>', '<a:5:478771136247627806>', '<a:6:478771169441349632>', '<a:7:478771167382208524>', '<a:8:478771170263564288>', '<a:9:478771170557165578>'][i]).join('');
client.guilds.get(member.guild.id).channels.get(sysop.animado).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${contadora} ${sysop.texto}` })
}})
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
//if (message.member.hasPermission('ADMINISTRATOR')) return;
if (sysop && sysop.inv && message.content.search('discord.gg') > -1) {	
message.delete();
return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000));
}}
});
}
});


client.on("messageUpdate", (newMessage, oldMessage) => {	
if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erro, sysop) {
if (sysop) {
//if (oldMessage.member.hasPermission('ADMINISTRATOR')) return;	
if (sysop && sysop.inv && oldMessage.content.search('discord.gg') > -1) {
oldMessage.delete();
return newMessage.channel.send(`<:xguardian:476061993368027148> | ${newMessage.author} Você não pode enviar convites de outros servidores aqui!. **Nem mesmo editando**`).then(sentMsg => sentMsg.delete(60000)) 
}}
});
}
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('👍').then(message.react('👎')).then(message.react(':FalseSysop3:462306755150479372'))  
}
});
}
});

client.on('message', message => {
    if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (oldMessage.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					oldMessage.delete();
					newMessage.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
  
  
 
  try {   
         //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./private/${command}.js`);
    commandFile.run(client, message, args);
  }catch (err) {
   
 
  }
 
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


          

client.on('message', message => {
	let settings = reload('./settings.json');
    let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0],
	suffix  = message.content.replace(config.prefix + comando, '').trim();
	if (message.content.startsWith(config.prefix) && comandos.has(comando)) {
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		 comando = comandos.get(comando.toLowerCase());                                   
		if (comando.usersOnCooldown.has(message.author.id))
			return message.reply(':warning: Você só pode utilizar este comando a cada ' + comando.cooldown + ' segundos!').then(sentMsg => sentMsg.delete(8000));
		else {
			comando.task(client, message, suffix);
			if (comando.cooldown) {
				comando.usersOnCooldown.add(message.author.id);
				setTimeout(() => {
					comando.usersOnCooldown.delete(message.author.id);
				}, comando.cooldown * 1000);
			}
		} 
		
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, `\`${message.author.tag}\``, true)
        .addField(`ID do Executor`, `\`${message.author.id}\``, true)
        .addField(`Comando usado:`, `\`\`\`Markdown\n# ${message.content}\`\`\``,false)
        .addField(`Dentro do server:`,`\`\`\`Markdown\n# ${message.guild.name}\`\`\``,false)
        .addField(`Canal onde foi Executado`,`\`${message.channel.name}\``,true)
	.addField(`Total de usuários`, `\`${server.memberCount}\``, true)	
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x0df7eb);
        
        client.guilds.get('441766085809799198').channels.get('483908190438817813').send({ embed });
	}
});

client.on('guildCreate', guild => {
  let ID = "244489368717230090";

  
    console.log(`O servidor: ${guild.name}  adicionou o seu bot `)
    
    const embed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    
        .setColor(0x4959e9)
        .addField("GOD", `**O servidor: __${guild.name}__ >adicionou o bot ___${client.user.username}__: ** `)
        .setThumbnail(guild.iconURL)
        .addField("Dono:",`<@${guild.ownerID}>`,true)
        .addField("Membros:",`${guild.members.size}`,true)
        .addField(":smiling_imp: __**Servidores atuais:**__", `\`\`\`js\n${client.guilds.size}\`\`\``)
 
        .setTimestamp()
        client.guilds.get("393818943246172161").members.map(a =>
        client.users.get(a.id).send({embed})) 
        
							  
});

client.login(process.env.AA);
