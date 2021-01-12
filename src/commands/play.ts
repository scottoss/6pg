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
    
}
}
