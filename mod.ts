/* Discord Bot */
import {CommandClient, Intents} from "./deps.ts"
import {HelloCommand, TellChuckNorrisJoke, TellJoke, TellRandomJoke, RandomMeme} from "./deps.ts"

const client = new CommandClient({
    prefix: "!"
})

const token = Deno.env.get("BOT_TOKEN")

client.commands.add(HelloCommand)
client.commands.add(TellChuckNorrisJoke)
client.commands.add(TellJoke)
client.commands.add(TellRandomJoke)
client.commands.add(RandomMeme)

client.connect(token, Intents.None)
console.log("Bot connected")