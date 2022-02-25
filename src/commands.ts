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

class TellRandomJoke extends Command {
    name = "joke"
    joke: Joke = new Joke()

    execute(ctx: CommandContext) {
        this.joke.fetchRandomJoke().then(function(val) {
            if (val.data.type === "twopart") {
                ctx.message.reply(val.data.setup)
                ctx.message.reply(val.data.delivery)
            }
            else {
                ctx.message.reply(val.data.joke)
            }
        })
    }
}

class RandomMeme extends Command {
    name = "meme"
    joke: Joke = new Joke()

    execute(ctx: CommandContext) {
        this.joke.fetchMeme().then(function(val) {
            console.log(val.data.url)
            ctx.message.reply(val.data.url)
        })
    }
}

export {HelloCommand, TellChuckNorrisJoke, TellJoke, TellRandomJoke, RandomMeme}