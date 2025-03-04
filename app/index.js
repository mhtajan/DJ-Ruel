const {
  Client,
  GatewayIntentBits,
  ActivityType,
  ActivityFlags,
  MessageFlags,
} = require("discord.js");
const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  getVoiceConnection,
} = require("@discordjs/voice");
const radio = require("./misc/stations.json");
const client = require("./bot.js");

const player = createAudioPlayer();

client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`);
});

async function play(interaction) {
  try {
    const radioIx = interaction.options.getString("radio");
    if (!radio.stations[radioIx]) {
      return interaction.reply({ content: "Invalid radio station!" });
    }

    const query = radio.stations[radioIx].url;
    const resourceStation = createAudioResource(query, {
      metadata: { title: radio.stations[radioIx].name },
    });

    const connection = joinVoiceChannel({
      channelId: interaction.member.voice.channelId,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    connection.subscribe(player);
    player.play(resourceStation);

    interaction.reply({
      content: `Now playing: **${radio.stations[radioIx].name}**`,
      flags: MessageFlags.None,
    });
  } catch (error) {
    console.error("Error playing radio:", error);
    interaction.reply({
      content: "An error occurred while trying to play the radio.",
      flags: MessageFlags.Ephemeral,
    });
  }
}
async function stop(interaction) {
  try {
    const connection = getVoiceConnection(interaction.guild.id);
    if (connection) {
      connection.destroy();
      interaction.reply({
        content: "Stopped playing radio.",
        flags: MessageFlags.Ephemeral,
      });
    } else {
      interaction.reply({
        content: "I'm not connected to a voice channel!",
        flags: MessageFlags.Ephemeral,
      });
    }
  } catch (error) {}
}
async function start(interaction){
  try {
    const connection = joinVoiceChannel({
      channelId: interaction.member.voice.channelId,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });
    if(connection){
      interaction.reply({
        content: "Connected to voice channel.",
        flags: MessageFlags.Ephemeral,
      });
    }else{
      connection.subscribe(player);
      //start radio // send embed design
    }
  } catch (error) {
    
  }
}
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "radio") await play(interaction);
  if (interaction.commandName === "stop") await stop(interaction);
});

player.on(AudioPlayerStatus.Playing, () => {
  const resource = player.state.resource;
  if (resource) {
    client.user.setPresence({
      status: "online",
      activities: [
        { name: resource.metadata.title, type: ActivityType.Watching },
      ],
    });
  }
});
