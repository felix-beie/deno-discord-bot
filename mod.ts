/* Discord Bot */
import {CommandClient, Command, Intents, CommandContext} from "./deps.ts"
import {HelloCommand} from "./deps.ts"

const client = new CommandClient({
    prefix: "!"
})
const token = Deno.env.get("BOT_TOKEN")

client.commands.add(HelloCommand)

client.connect(token, Intents.None);