const { Client, Message, MessageEmbed} = require("discord.js");
const Punitives = require('../../../../Global/Databases/Schemas/Global.Punitives');

module.exports = {
    Isim: "uyarı",
    Komut: ["warn"],
    Kullanim: "warn <@user/ID>",
    Aciklama: "Belirlenen üyeyi ceza şeklinde uyarır ve cezalarına işler.",
    Kategori: "yönetim",
    Extend: true,
    
   /**
   * @param {Client} client 
   */
  onLoad: function (client) {

  },

   /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */

  onRequest: async function (client, message, args) {
        if(!roller.warnHammer.some(oku => message.member.roles.cache.has(oku)) && !roller.üstYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) && !roller.altYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) && !roller.kurucuRolleri.some(oku => message.member.roles.cache.has(oku)) && !roller.yönetimRolleri.some(oku => message.member.roles.cache.has(oku))  && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(cevaplar.noyt);
        let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!uye) return message.channel.send(cevaplar.üye + ` \`${sistem.botSettings.Prefixs[0]}${module.exports.Isim} <@user/ID> <Sebep>\``);
        if(message.author.id === uye.id) return message.channel.send(cevaplar.kendi);
        if(!uye && message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(cevaplar.yetkiust);
        let sebep = args.splice(1).join(" ");
        if(!sebep) return message.channel.send(cevaplar.sebep);
        let lastWarn = await Punitives.find({Member: uye.id, Type: "Uyarılma"})
        let checkRoles = [...roller.Yetkiler, ...roller.jailHammer, ...roller.üstYönetimRolleri, ...roller.yönetimRolleri,...roller.altYönetimRolleri, ...roller.kurucuRolleri]
        if(!checkRoles.some(x => uye.roles.cache.has(x)) && !uye.permissions.has("ADMINISTRATOR") && lastWarn.length >= 3) {
            if(roller.jailHammer.some(oku => message.member.roles.cache.has(oku)) || roller.üstYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) || roller.altYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) || roller.kurucuRolleri.some(oku => message.member.roles.cache.has(oku)) || roller.yönetimRolleri.some(oku => message.member.roles.cache.has(oku))  || message.member.permissions.has('ADMINISTRATOR')) {
                if(Number(ayarlar.jailLimit) && client.fetchJailLimit.get(message.member.id) >= ayarlar.jailLimit) return await uye.addPunitives(6, message.member, sebep, message),message.react(message.guild.emojiGöster(emojiler.Onay))
                uye.dangerRegistrant() 
                return uye.addPunitives(3, message.member, "Gereğinden fazla uyarı cezası bulunmak!" + ` (${sebep})`, message) 
            }
        }
        await uye.addPunitives(6, message.member, sebep, message)
        message.react(message.guild.emojiGöster(emojiler.Onay))

    }
};


