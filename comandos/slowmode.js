const database = require("../database.js");

module.exports = {
  task(client, message, suffix) {

      
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

 if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerenciamento de Servidor a você.`);
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerenciamento de mensagens.`)

let args = suffix.split(' '); 
let sy = message.content.split(' ');
let amount = isNaN(Number(sy[1])) ? Number(sy[2]) : Number(sy[1]);
let mensagem = suffix; 
console.log(mensagem);
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
message.channel.send(`Olá ${message.author} slowmode, como usar?\n\nUse: \`sy!slowmode\` mais tempo para ativar o slowmode.\nUse: \`sy!slowmode\` disable para desativar o slowmode.\n\n**Exemplo:** sy!slowmode 1000`);
return;
    }
      
database.Guilds.findOne({ "_id": message.guild.id}, function(erro, sysop) {
   
    if (!sysop) {
        var server = new database.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
             slow: 0,
             sloww: 0,
        });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
            if (!mensagem) {
         // if (!amount) {
    if (!sysop.sloww)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui o slowmode ativado. Use `sy!slowmode help`');
   else 
   return message.channel.send(`O modo lento deste servidor está ativado num tempo de: ${sysop.sloww} milisegundos. Use: sy!slow help para setar`);

    } else {
        if (mensagem !== 'off') { 
            sysop.sloww = amount * 1000
            sysop.save();

            return message.channel.send(`Ok ${message.author}! Você definiu o slowmode com um tempo de ${amount} segundos.`);
        } else {
            sysop.sloww = 0;
            sysop.save();
            return message.reply('OK! Slowmode **Desativado!** <:trust:436717162632052753>');
        }
    
        
    }
      }
        
});
});
}};
