const { Ramalcim } = require("../../../Helpers/Schemas")
class Ready {
  Event = "ready"
  async run() {
    setInterval(async () => {
      const ramal = await Ramalcim.findOne({ guildID: config.guildID })
      const channel = client.channels.cache.get(ramal.botVoiceChannel);
      voice.joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });
    }, 600 * 1000);
  }
}

module.exports = Ready