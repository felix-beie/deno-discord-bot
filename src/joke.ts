import {soxa} from "../deps.ts"

class Joke {

    async fetchChuckNorrisJoke(){
        try {
            return soxa.get("https://api.icndb.com/jokes/random")
        } catch (err) {
            console.log(err)
        }
    }

}

export {Joke}