const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const moment = require('moment')
moment.locale("tr");
const ms = require("ms");
const { genEmbed } = require("../../../../Global/Init/Embed");

module.exports = {
    name: "Mesajı Bildir 📛",
    description: "Testde!",
    type: 'MESSAGE',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let kanal = interaction.guild.channels.cache.get(interaction.channelId)
        let msg = await kanal.messages.fetch(interaction.targetId)
        let message = msg
        let check = await client.users.fetch(message.author.id)
        let uye = message.guild.members.cache.get(check.id)
        let yetkili = message.guild.members.cache.get(interaction.member.id)
        let reportChannel = message.guild.kanalBul("şikayet-log")
        if(reportChannel) reportChannel.send({content: `${roller.Buttons.chatSorumlusu ? message.guild.roles.cache.get(roller.Buttons.chatSorumlusu) ? message.guild.roles.cache.get(roller.Buttons.chatSorumlusu) : [ ...roller.yönetimRolleri, ...roller.üstYönetimRolleri, ...roller.kurucuRolleri].map(x => message.guild.roles.cache.get(x)) : [ ...roller.yönetimRolleri, ...roller.üstYönetimRolleri, ...roller.kurucuRolleri].map(x => message.guild.roles.cache.get(x))}`,embeds: [new genEmbed().setDescription(`${uye} isimli üye **${tarihsel(Date.now())}** tarihinde ${yetkili} üyesi tarafından attığı mesaj şikayet edildi.`).addField(`\` ••❯ \` Mesaj Bilgisi`, `${uye} tarafından ${message.channel} (\`${message.channel.id}\`) kanalına ${tarihHesapla(message.createdTimestamp)} önce yazıldı.`).addField(`\` ••❯ \` Mesaj İçeriği`, `> ${message.content}`)]})
        await interaction.followUp({content: `${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye} üyesinin \`${message.content}\` içeriğine sahip mesajı, bildirildi.`, ephemeral: true})
    }
};