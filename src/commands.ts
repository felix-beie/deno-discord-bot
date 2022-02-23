import {Command, CommandContext, Joke} from "../deps.ts"

class HelloCommand extends Command {
    name = "Hello"
    executeHello(ctx: CommandContext) {
        ctx.message.reply("Hello")
    }  
}

class TellChuckNorrisJoke extends Command {
    name = "Chuck"
    chuckJoke: Joke = new Joke()
    executeChuckNorrisJoke(ctx: CommandContext) {
        this.chuckJoke.fetchChuckNorrisJoke().then(function(val) {
            ctx.message.reply(val.data.value.joke)
        })
    }
}

export {HelloCommand, TellChuckNorrisJoke}