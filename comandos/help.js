const Discord = require("discord.js");

module.exports = {
    task(client, message, args) {
  
  
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
  
        message.channel.send(`${message.author} check suas mensagens privadas!`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** s!\n\n
**filtro <invites>** - Bloqueia links de convites de outros servidores nos eventos message e messageUpdate.
**banlock <menção/ID>** - Banir usuário com motivo por menção ou por ID (Para usar por ID o usuário a ser banido, deve estar em um servidor em comum com o bot.) .
**unban <ID>** - Desbani usuários do servidor por ID. (Para usar por ID o usuário a ser desbanido, deve estar em um servidor em comum com o bot.)`)
        .setColor('#fc8d00');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(120000));
        
    }
};
