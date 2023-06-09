const { Ramalcim } = require('../../../../Helpers/Schemas')
class Temizle extends Command {
    constructor(client) {
        super(client, {
            name: "clear",
            aliases: ["temizle", "sil"],
            Founder: false
        });
    }
    async run(client, message, args, embed) {
        if (!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) { return message.channel.send(`${emojis.iptal} En az \`1 - 100\` arasında bir sayı değeri girmelisiniz.`).then(e => setTimeout(() => e.delete(), 7000)); }
        else { message.channel.bulkDelete(Number(args[0]), true).then(msg => message.channel.send(`${emojis.onay} <#${message.channel.id}> kanalında **${msg.size}** adet mesaj başarı ile temizlendi.`)).sil(5) }
    }
}

module.exports = Temizle