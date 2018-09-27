const Discord = require("discord.js");
const db = require("../database.js");
var dayCol = new Set()

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

   const ID = '307956208042770433';	
  let users = client.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do Sysop,pega o convite usando **sy!infos**");
  let role = client.guilds.get(ID).members.get(message.author.id).roles.find("id", "439588232263499776")
  if(!role)
  return message.channel.send(`<:DiscordPartner:467546781538975754> Woww ${message.author}! Você não é um usuário Parceiro do Sysop. Mais infos de como virar parceiro digite: s!partner.`);
  

  
            let args = suffix.split(' '); 
            let sysop =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  `Foi banido por ${message.author.username}#${message.author.discriminator}. Motivo não especificado.`;



if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('<:xguardian:476061993368027148> Desculpe, você não tem permissão de banir usuário neste servidor!');
let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}! Mencione alguém ou especifique um ID.`);

let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply(`<:sysalerta:469789950938841088> ${message.author}! Eu não tenho permissão para banir usuários nesse servidor.`);

let user = client.users.has(id) ? client.users.get(id) : null;

if (!user) return message.reply("<:xguardian:476061993368027148> Não encontrei nenhum usuário.")


message.channel.send(`<:sysalerta:469789950938841088> **|** Opa ${message.author} Essa função requer confirmação. Responda essa mensagem com: **"ban"** para banir o usuário e **"cancelar"** para cancelar o banimento.`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "ban" && res.author.id == message.author.id) || (res.content == 'cancelar' && res.author.id == message.author.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
    
if (col.first().content == 'ban') {

if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, você não tem permissão de banir usuário neste servidor!');


message.guild.fetchBans().then(bans => {
let users = bans.filter(r => r === user);
if (users.first()) 
return message.channel.send(`<:xguardian:476061993368027148> ${message.author} este usuário já está banido aqui.`);

    
let bannable = message.guild.member(id)
if (bannable) {  
if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply("<:xguardian:476061993368027148> Você não pode banir este usuário pois seu cargo é menor ou igual a o do usuário a ser banido!")
    
if (!message.guild.member(user).bannable) 
return message.reply('<:xguardian:476061993368027148> Eu não posso banir esse usuário.');
    
} else {

    message.guild.ban(user, sysop);
        let server = message.guild
    const embed1 = new Discord.RichEmbed()
    .setTitle(`Membro banido`)
    .addField(`<:banSysop:476264254606016515> Usuário banido`, user)
    //.addField(`**Motivo:**`, sysop)
    .addField(`Banido do servidor:`, server.name)
    .addField(`**Executor**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#00fffa')
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.ban(user, sysop);
        let server = message.guild
    const embed = new Discord.RichEmbed()
    .setTitle(`Membro Banido`)
    .addField(`<:banSysop:476264254606016515> Usuário banido`, user)
    //.addField(`**Motivo:**`, sysop)
    .addField(`Banido do servidor:`, server.name)
    .addField(`**Executor**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#00fffa')
    message.channel.send({embed});
    user.send({embed})

} else {
    message.reply('<:sysalerta:469789950938841088> Não encontrei nenhum usuário');

}
})

    }
    if (col.first().content == 'cancelar') {
 
    message.channel.send(`OK ${message.author}! Você cancelou o banimento de: ${user}`);
    }
}).catch(() => message.channel.send(`:shrug::skin-tone-2: **|** Tempo de **1** minuto passado. Solicitação de banimento expirada.`));
      
});
});
}};
