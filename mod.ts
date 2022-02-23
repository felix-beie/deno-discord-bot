/* Discord Bot */
import {CommandClient, Command, Intents, CommandContext} from "./deps.ts"
import {HelloCommand, TellChuckNorrisJoke} from "./deps.ts"

const client = new CommandClient({
    prefix: "!"
})
const token = Deno.env.get("BOT_TOKEN")

client.commands.add(HelloCommand)
client.commands.add(TellChuckNorrisJoke)


client.connect(token, Intents.None)