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

message.channel.send(`${message.author} lhe enviei as informações de como se tornar parceiro no Sysop em seu privado.`)
const embed = new Discord.RichEmbed()
.setTitle(`Sysop Partners | Como se tornar Parceiro?`)
.setThumbnail(`https://cdn.discordapp.com/attachments/442346665052209153/494654244876451840/SysopLogoPremium.png`)
.setDescription(`Olá \`${message.author.username}\`, bem-vindo(a) a licença **Premium** do Sysop!

**Sysop Partners** é uma versão premium para doadores do bot. Disponibilizando a doadores comandos únicos para doadores. Comandos já existentes mas com upgrades diferentes. Acesso rápido a novos comandos e muito mais.

Para que você se torne um **Parceiro** do Sysop você precisa fazer uma doação de no minímo **5 (cinco reais)** para o bot via **PayPal**, onde será analisado e conferido tudo. Para ter o acesso você precisa estar em nosso servidor de Suporte oficial onde você econtrar em sites do bot ou no comando sy!info fo Sysop (NORMAL). Ao ser avaliado e analisado tudo em nosso sistema, uma tag será adicionada para você.

Para que você mantenha a licença **Partners** você precisa contribuir com no minímo cinco reais mensais. Usuários que doam mais de 5 reais **exemplo:** dez reais nós não contamos como próximo mês.

Agora que você conhece nossos recursos premium vá direto para o site de pagamento e efetue o seu para desfrutar de nossos comandos **especiais!**

[Servidor Suporte](https://discord.gg/GMSjtTQ) │ [FAZER DOAÇÃO](https://discord.gg/GMSjtTQ) │ Contato: <@244489368717230090>`)
.setColor('#2780ff');
message.author.send({embed});

});
        
    }
};
