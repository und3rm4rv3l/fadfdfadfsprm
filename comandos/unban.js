const Discord = require("discord.js");

module.exports = {
    description: 'Bano usuários do servidor com motivo.',
    categoria: 'Moderação',
    task(client, message, suffix) {
     message.delete();
 
let database = require("../database.js");  
database.Bloqueio.findOne({
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
  
if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply('<:FalseSysop3:462306755150479372> Desculpe, você não tem permissão de banir usuário neste servidor!');

if (!message.member.hasPermission("MANAGE_GUILD")) 
return message.channel.send("<:FalseSysop3:462306755150479372> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) 
return message.reply('<:FalseSysop3:462306755150479372>  Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerencisamento de servidor.')
    
    
            let args = suffix.split(' '); 
            let sysop =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  `Recebeu uma anistia sem colocar o motivo  por: ${message.author}`;

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('Especifique um ID do usuário a receber Unban.');
let user = client.users.has(id) ? client.users.get(id) : null;
if (!user) return message.reply("<:FalseSysop3:462306755150479372> Não encontrei nenhum usuário");
let unban = message.guild.unban(id);
if (unban) {  

} else {

    message.guild.unban(user, sysop);
    let server = message.guild;
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🌟 UNBAN 🌟`)
    .addField(`Usuário que recebeu anistia`, user)
    .addField(`**Motivo:**`, sysop)
    .addField(`Recebeu anistia do servidor:`, server.name)
    .addField(`**Executor Responsável pela anistia**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#81e77f')
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.unban(user, sysop);
    let server = message.guild
     const embed = new Discord.RichEmbed()
    .setTitle(`🌟 UNBAN 🌟`)
    .addField(`Usuário que recebeu anistia`, user)
    .addField(`**Motivo:**`, sysop)
    .addField(`Recebeu anistia do servidor:`, server.name)
    .addField(`**Executor Responsável pela anistia**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#81e77f')
    message.channel.send({embed});
    user.send({embed})
} else {
    message.reply('<:FalseSysop3:462306755150479372> Não encontrei nenhum usuário. Talvez ele não esteja em nenhum servidor compartilhado comigo.');

}
});
}
};
