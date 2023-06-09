const { GuildMember, MessageEmbed, Message, MessageActionRow, MessageButton } = require("discord.js");
const fs = require('fs');
const { genEmbed } = require("../../../../Global/Init/Embed");
const Roles = require('../../../../Global/Databases/Schemas/Guards/GuildMember.Roles.Backup');
 /**
 * @param {Guild} guild
 * @param {GuildMember} user
 */


module.exports = async (oldPresence, newPresence) => {
    let embed = new genEmbed()
    let Dedection =  Object.keys(newPresence.member.presence.clientStatus);
    let uye = newPresence.guild.members.cache.get(newPresence.member.user.id)
    if(!uye) return;
    let Row = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId('ver')
        .setEmoji("<a:onay:1031119892977569902>")
        .setLabel('Rolleri Geri Ver!')
        .setStyle("SECONDARY"),
    )
    const Permissions = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_EMOJIS_AND_STICKERS", "MANAGE_WEBHOOKS"];        
    let arr = []
    let CheckWeb = Dedection.find(x => x == "web");
    let memberSafeRoles =  uye.roles.cache.filter((e) => e.editable && e.name !== "@everyone" && Permissions.some((a) => e.permissions.has(a)));
    if(memberSafeRoles) memberSafeRoles.forEach(rol => {
            arr.push(rol.id)
        })

    if(CheckWeb && Permissions.some(x => uye.permissions.has(x))) {
       if(await client.checkMember(uye.id, undefined ,"Web Tarayıcı Koruması")) return; 
        await Roles.updateOne({_id: uye.id}, {$set: {"Roles": arr, Reason: "Web tarayıcı girişi için kaldırıldı."}}, {upsert: true})
        if(arr && arr.length >= 1) await uye.roles.remove(arr, `Web üzerinden sunucuyu görüntülediği için.`).catch(err => {})
        embed.setFooter("aşağıda ki düğmeyi sadece sunucu sahibi kullanabilir.").setTitle("Bir Yönetici Sunucuya Webden Giriş Sağladı!").setDescription(`${uye} (\`${uye.id}\`) isimli yönetici Web tarayıcısından **Sunucu** ekranına giriş yaptığı için yetkisi çekildi.\n\`\`\`fix
Üzerinden Alınan Roller \`\`\`\
${arr.length >= 1 ? `\` ••❯ \` Çekilen Roller: ${arr.filter(x => uye.guild.roles.cache.get(x)).map(x => uye.guild.roles.cache.get(x)).join(", ")}` : `\` ••❯ \` Üzerinden herhangi bir rol alınmadı.` } `)
        let loged = newPresence.guild.kanalBul("guard-log");
        if(loged) await loged.send({content: "@everyone",embeds: [embed], components: [Row]}).then(async (msg) => {
            const tacsahip = await newPresence.guild.fetchOwner();
            const filter = i =>  i.customId == "ver" && ayarlar.staff.includes(i.user.id) && i.user.id === tacsahip.id
            const collector = msg.createMessageComponentCollector({ filter, max: 1 })
         
            collector.on('collect', async i => { 
                if(i.customId == "ver") {
                    let Data = await Roles.findOne({_id: uye.id})
                    if(Data && Data.Roles && Data.Roles.length) {
                        i.reply({content: `${uye.guild.emojiGöster(emojiler.Onay)} ${uye}, üyesinin çekilen rolleri başarıyla geri verildi.`, ephemeral: true})
                        if(Data.Roles) uye.roles.add(Data.Roles, `${i.user.tag} tarafından tekrardan verildi.`).catch(err => {})
                        await Roles.findByIdAndDelete(uye.id)
                    } else {
                        i.reply({content: `${uye.guild.emojiGöster(emojiler.Iptal)} ${uye}, üyesinin rolleri veritabanında bulunamadığından işlem sonlandırıldı.`, ephemeral: true})
                    }
                }
            })
            collector.on('end', c => {
                msg.edit({embeds: [embed], components: []}).catch(err => {})
            })
        });
        const owner = await newPresence.guild.fetchOwner();
        if(owner) owner.send({embeds: [embed]}).catch(err => {})

    } else {
        return
    }
}

module.exports.config = {
    Event: "presenceUpdate"
}
