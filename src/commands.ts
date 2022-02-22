import {Command, CommandContext} from "../deps.ts"

export class HelloCommand extends Command {
    name = "Hello"
    execute(ctx: CommandContext) {
        ctx.message.reply("Hello")
    }  
}