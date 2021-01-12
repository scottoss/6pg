const { embed } = require('../common/langsEmbed');


export default class LangsCommand implements Command {
    name = 'langs';
    summary = 'show all langs';
    precondition: Permission = '';
    cooldown = 0;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        await ctx.channel.send(embed);
    }
}
