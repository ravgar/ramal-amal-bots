class connBots {
    static async send(channel, content) {
        let guild = verifedBot.guilds.cache.get(sistem.SERVER.ID)
        let ch = guild.channels.cache.get(channel)
        if(ch) await ch.send(content).catch(err => {});      
    }
}
const { Client, Intents } = require('discord.js');
const { bgBlue, black, green } = require("chalk");

class safeStart extends Client {
    constructor(...opt) {
        super({
            opt,
            intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_WEBHOOKS],
            fetchAllMembers: true,
        })
        this.login("OTk0NjcxMzE5NzM4MjMyOTEy.Gczbdj.NjewxqjgGIP2tCKhKDPTfUqwEsq0abjdfXv_Gk").then(x => {
            client.logger.log(`${black.bgHex('#D9A384')("VERIFED BOT")} BOT kullanıma aktif edilmiştir.`,"botReady")
        })
        
    }

}

module.exports = { connBots, safeStart }



