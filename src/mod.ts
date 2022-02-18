/* Discord Bot */
import {Client, Message, Intents} from "./dependencies.ts"

const client = new Client();
const token = Deno.env.get("BOT_TOKEN")

client.on("messageCreate", (msg: Message): void => {
    const content = msg.content;
    if(content === "!ping") {
        msg.reply("Hello")
    }
});

client.connect(token, Intents.None);