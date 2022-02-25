import {soxa} from "../deps.ts"

class Joke {

    async fetchChuckNorrisJoke(){
        try {
            return soxa.get("https://api.icndb.com/jokes/random")
        } catch (err) {
            console.log(err)
        }
    }

    async fetchJod(){
        try {
            return soxa.get("https://api.jokes.one/jod")
        } catch (err) {
            console.log(err)
        }
    }

    async fetchRandomJoke() {
        try {
            return soxa.get("https://v2.jokeapi.dev/joke/Any")
        } catch (err) {
            console.log(err)
        }
    }

    async fetchMeme() {
        try {
            return soxa.get("https://meme-api.herokuapp.com/gimme")
        } catch (err) {
            console.log(err)
        }
    }

}

export {Joke}