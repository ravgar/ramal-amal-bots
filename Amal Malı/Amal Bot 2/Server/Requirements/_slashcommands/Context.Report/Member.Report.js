const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const moment = require('moment')
moment.locale("tr");
const ms = require("ms");
const { genEmbed } = require("../../../../Global/Init/Embed");

module.exports = {
    name: "Üyeyi Bildir 📛",
    description: "Testde!",
    type: 'USER',
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let message = interaction
        let check = await client.users.fetch(message.targetId)
        let uye = message.guild.members.cache.get(check.id)
        let yetkili = message.guild.members.cache.get(interaction.member.id)
        let reportChannel = message.guild.kanalBul("şikayet-log")
        if(reportChannel) reportChannel.send({content: `${[ ...roller.yönetimRolleri, ...roller.üstYönetimRolleri, ...roller.kurucuRolleri].map(x => message.guild.roles.cache.get(x))}`,embeds: [new genEmbed().setDescription(`${uye} isimli üye **${tarihsel(Date.now())}** tarihinde ${yetkili} üyesi tarafından şikayet edildi.`).setFooter("bu bildiriyi gören sorun çözücü veya sorun çözmeciler derhal müdahale etmesi önem ve rica ile isteniyor.")]})
        await interaction.followUp({content: `${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye} üyesini şikayet ettiniz.`, ephemeral: true})
    }
};