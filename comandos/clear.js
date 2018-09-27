module.exports = {
    description: 'Apago mensagens do chat ou um usuário especifico.',
    categoria: 'Moderação',
    task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

 if (!message.member.hasPermission('MANAGE_MESSAGES'))
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Desculpe, este comando está disponível apenas para cargos de Gerenciamento de mensagens do servidor.`);

        
           let args   = message.content.split(' '),
            user   = message.mentions.users.size > 0 ? message.mentions.users.first() : null,
            amount = isNaN(Number(args[1])) ? Number(args[2]) : Number(args[1]);
        
        if (!amount) 
            return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}! Especifique a quantidade de mensagens a serem deletadas. Sendo **100** o máximo.`);
        if (!amount && !user) 
            return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}! Você deve especificar um usuário mais a quantidade de mensagens a serem apagadas do mesmo ou apenas especificar a quantidade de mensagens a serem deletadas no chat em geral.`);
        if (amount < 2 || amount > 100) 
            return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}! Limite incorreto. Tente entre 2 á 100`);
        
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos de Gerenciamento de mensagens do servidor.');

        message.channel.fetchMessages({
            limit: amount,
        }).then(messages => {
            let deleted = messages.filter(m => user ? m.author.id === user.id : m).array().slice(0, amount);
            if (deleted.length < 2)
            return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}! Não encontrei nada num limite de ${amount} mensagens!`);
            
            message.channel.bulkDelete(deleted).catch(error => console.log(error.stack));

message.channel.send(`:wastebasket: | ${message.author} limpou um total de **${amount} mensagens** neste canal.`);

        });
    })
    }
};
