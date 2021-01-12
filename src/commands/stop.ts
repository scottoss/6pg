import { Command, CommandContext, Permission } from './command';
import Deps from '../utils/deps';
import Music from '../modules/music/music';

export default class StopCommand implements Command {
  aliases = ['leave'];
  name = 'stop';
  summary = 'Stop playback, clear list, and leave channel';
  precondition: Permission = 'SPEAK';
  cooldown = 5;
  module = 'Music';

  constructor(private music = Deps.get<Music>(Music)) {}
  
  async execute(ctx: CommandContext) {

const { ttsPlayer, voice } = message.guild;
    const connection = voice ? voice.connection : null;
    const channel = voice ? voice.channel : null;

    if (!connection) {
      message.reply("I'm not in a voice channel.");
      return;
    }

    if (!channel) {
      message.reply('you need to be in a voice channel to do that.');
      return;
    }

    ttsPlayer.stop()
      .then(() => {
        message.channel.send(`Successfully left the voice channel ${channel}.`);
      })
      .catch((error) => {
        throw error;
      });
  }
  }
}
