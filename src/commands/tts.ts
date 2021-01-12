import { Command, CommandContext, Permission } from './command';
const logger = require('@greencoast/logger');
const { splitToPlayable } = require('../common/utils');
const allowOver200 = process.env.ALLOW_OVER_200 || require('../../config/settings.json').allow_more_than_200_chars;




export default class TtsCommand implements Command {
    name = 'tts';
    summary = 'Send a tts';
    precondition: Permission = 'SPEAK';
    cooldown = 0;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
    const { channel } = onmessage.member.voice;
    const { ttsPlayer, name: guildName, voice } = onmessage.guild;
    const connection = voice ? voice.connection : null;
    const [atLeastOneWord] = Option.args;

    if (!channel) {
      onmessage.reply('you need to be in a voice channel first.');
      return;
    }

    if (!channel.joinable) {
      onmessage.reply('I cannot join your voice channel.');
      return;
    }

    if (!atLeastOneWord) {
      onmessage.reply('you need to specify a message.');
      return;
    }

    if (connection) {
      splitToPlayable(Option.args)
        .then((phrases) => {
          ttsPlayer.say(phrases);
        })
        .catch((error) => {
          onmessage.reply(error);
        });
    } else {
      channel.join()
        .then(() => {
          logger.info(`Joined ${channel.name} in ${guildName}.`);
          onmessage.channel.send(`Joined ${channel}.`);
          splitToPlayable(Option.args)
            .then((phrases) => {
              ttsPlayer.say(phrases);
            })
            .catch((error) => {
              onmessage.reply(error);
            });
        })
        .catch((error) => {
          throw error;
        });
    }
    }
}
