const { GuildMember, Collection } = require('discord.js');
const GUILD_INVITE = require('../../../../Global/Databases/Schemas/Global.Guild.Invites');
const GUILD_SETTINGS = require('../../../../Global/Databases/Schemas/Global.Guild.Settings');
const Upstaff = require('../../../../Global/Plugins/Staff/_index');
/**
 * 
 * @param {GuildMember} member 
 */

module.exports = async (member) => {
    if(member.guild.id != sistem.SERVER.ID) return;

    const _findServer = await GUILD_SETTINGS.findOne({ guildID: sistem.SERVER.ID })
    const _set = global._set = _findServer.Ayarlar
    
    const channel = client.channels.cache.get(_set.davetKanalı);
    if (!channel) return;
    let entry = await member.guild.fetchAuditLogs({ type: 'BOT_ADD' }).then(audit => audit.entries.first());
    if (member.user.bot && entry) return channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli bot, **${entry.executor.tag}** tarafından \`${member.guild.name}\` sunucusuna davet edildi.` })
    const guildInvites = client.invites.get(member.guild.id) || new Collection()
    const invites = await member.guild.invites.fetch();
    const invite = invites.find((inv) => guildInvites.has(inv.code) && inv.uses > guildInvites.get(inv.code).uses) || guildInvites.find((x) => !invites.has(x.code)) || member.guild.vanityURLCode;
    const cacheInvites = new Collection();
    invites.map((inv) => { cacheInvites.set(inv.code, { code: inv.code, uses: inv.uses, inviter: inv.inviter }); });
    client.invites.set(member.guild.id, cacheInvites);
    if (invite === null) {
      channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, sunucuya katıldı fakat davetçisi bulunamadı.` })
    } else if (invite === undefined) {
      channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, sunucuya katıldı fakat davetçisi bulunamadı.` })
    } else if (!invite) {
      channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, sunucuya katıldı fakat davetçisi bulunamadı.` })
    } else if (invite === member.guild.vanityURLCode) {
      await GUILD_INVITE.findOneAndUpdate({ userID: member.user.id }, { $set: { Inviter: member.guild.id } }, { upsert: true });
      await GUILD_INVITE.findOneAndUpdate({ guildID: member.guild.id, userID: member.guild.id }, { $inc: { total: 1 } }, { upsert: true });
      const inviterData = await GUILD_INVITE.findOne({ guildID: member.guild.id, userID: member.guild.id });
      const total = inviterData ? inviterData.total : 0;
      return channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, sunucuya özel url ile katıldı.` });
    } else {
      let inviteOwn = member.guild.members.cache.get(invite.inviter.id);
      await GUILD_INVITE.findOneAndUpdate({ userID: member.user.id }, { $set: { Inviter: invite.inviter.id } }, { upsert: true });
      if (Date.now()-member.user.createdTimestamp <= 1000*60*60*24*7) {
        await GUILD_INVITE.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { fake: 1, regular: 1 } }, { upsert: true });
        const inviterData = await GUILD_INVITE.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
        const total = inviterData ? inviterData.total : 0;
        channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, **${invite.inviter.tag}** tarafından \`${member.guild.name}\` sunucusuna davet edildi. (\`${total}\` daveti bulunmakta)` });
      } else {
        await GUILD_INVITE.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, regular: 1 } }, { upsert: true });
        const inviterData = await GUILD_INVITE.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
        const total = inviterData ? inviterData.total : 0;
        if(inviteOwn) {
            if(_statSystem.system) Upstaff.addPoint(inviteOwn.id, _statSystem.points.invite, "Invite")
        }
        
        channel.send({ content: `${member.guild.emojiGöster(emojiler.Onay)} ${member} isimli üye, **${invite.inviter.tag}** tarafından \`${member.guild.name}\` sunucusuna davet edildi. (\`${total}\` daveti bulunmakta)` });
      }
    }
}

module.exports.config = {
    Event: "guildMemberAdd"
}