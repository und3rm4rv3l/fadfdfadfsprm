const Discord = require("discord.js");
const db = require("../database.js")

module.exports = {
    task(client, message, suffix) {
        
        
        db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

const embed = new Discord.RichEmbed()
.setTitle(`Comandos Premium | Sysop Partners`)
.setThumbnail(`https://cdn.discordapp.com/attachments/442346665052209153/494654244876451840/SysopLogoPremium.png`)
.setDescription(`**s!help mod** - Para ver meus comandos de Moderação.`)
.setFooter(message.guild.name + ' Requisado por: ' + message.author.username)
.setColor('#2780ff');
if (!suffix) return message.channel.send({embed});

switch (suffix.split(' ')[0]){
	
case 'mod': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Moderação em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** s!\n\n
**filtro <invites>** - Bloqueia links de convites de outros servidores nos eventos message e messageUpdate.
**banlock <menção/ID>** - Banir usuário com motivo por menção ou por ID (Para usar por ID o usuário a ser banido, deve estar em um servidor em comum com o bot.) .
**unban <ID>** - Desbani usuários do servidor por ID. (Para usar por ID o usuário a ser desbanido, deve estar em um servidor em comum com o bot.)
**clear <amount>** - Apaga mensagens do chat ou de um usuário especifico. Sendo **100** a quantidade máxima a ser apagadas por clear.`)
        .setColor('#2780ff');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
}
    
}


});
        
    }
};
