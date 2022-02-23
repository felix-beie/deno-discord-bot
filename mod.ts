/* Discord Bot */
import {CommandClient, Intents} from "./deps.ts"
import {HelloCommand, TellChuckNorrisJoke, TellJoke} from "./deps.ts"

const client = new CommandClient({
    prefix: "!"
})

const token = Deno.env.get("BOT_TOKEN")

client.commands.add(HelloCommand)
client.commands.add(TellChuckNorrisJoke)
client.commands.add(TellJoke)


client.connect(token, Intents.None)
console.log("Bot connected")