import {Command, CommandContext, Joke} from "../deps.ts"

class HelloCommand extends Command {
    name = "hello"

    execute(ctx: CommandContext) {
        ctx.message.reply("Hello")
    }  
}

class TellChuckNorrisJoke extends Command {
    name = "chuck"
    chuckJoke: Joke = new Joke()

    execute(ctx: CommandContext) {
        this.chuckJoke.fetchChuckNorrisJoke().then(function(val) {
            console.log(val.data.value.joke)
            ctx.message.reply(val.data.value.joke)
        })
    }
}

class TellJoke extends Command {
    name = "jod"
    joke: Joke = new Joke()

    execute(ctx: CommandContext) {
        this.joke.fetchJod().then(function(val) {
            console.log(val)
            ctx.message.reply(val.data.contents.jokes[0].joke.text)
        })
    }
}

export {HelloCommand, TellChuckNorrisJoke, TellJoke}