import { Command, CommandContext, Permission } from './command';
import Deps from '../utils/deps';
import Music from '../modules/music/music';

export default class PlayCommand implements Command {
  aliases = ['p'];
  cooldown = 2;
  module = 'Music';
  name = 'play';
  precondition: Permission = 'SPEAK';
  summary = 'Join and play a YouTube result.';
  usage = 'play query'

  constructor(private music = Deps.get<Music>(Music)) {}
  
  execute = async(ctx: CommandContext, ...args: string[]) => {
    // Require both libraries
const { Client } = require("discord.js");
const { Manager } = require("erela.js");

// Initiate both main classes
const client = new Client();

// Define some options for the node
const nodes = [
  {
    host: "localhost",
    password: "youshallnotpass",
    port: 2333,
  }
];

// Assign Manager to the client variable
client.manager = new Manager({
  // The nodes to connect to, optional if using default lavalink options
  nodes,
  // Method to send voice data to Discord
  send: (id, payload) => {
    const guild = client.guilds.cache.get(id);
    // NOTE: FOR ERIS YOU NEED JSON.stringify() THE PAYLOAD
    if (guild) guild.shard.send(payload);
  }
});
    if (command === "play") {
    if (!message.member.voice.channel) return message.reply("you need to join a voice channel.");
    if (!args.length) return message.reply("you need to give me a URL or a search term.");

    const search = args.join(" ");
    let res;

    try {
      // Search for tracks using a query or url, using a query searches youtube automatically and the track requester object
      res = await client.manager.search(search, message.author);
      // Check the load type as this command is not that advanced for basics
      if (res.loadType === "LOAD_FAILED") throw res.exception;
      else if (res.loadType === "PLAYLIST_LOADED") throw { message: "Playlists are not supported with this command." };
    } catch (err) {
      return message.reply(`there was an error while searching: ${err.message}`);
    }

    // Create the player 
    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
    });
  
    // Connect to the voice channel and add the track to the queue
    player.connect();
    player.queue.add(res.tracks[0]);
  
    // Checks if the client should play the track if it's the first one added
    if (!player.playing && !player.paused && !player.queue.size) player.play()

    return message.reply(`enqueuing ${res.tracks[0].title}.`);
  }
});
}
}
