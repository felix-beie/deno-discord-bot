import {Joke} from "../src/joke.ts"

Deno.test("fetchChuckNorrisJoke", async() => {
    const res1 = null
    const res2 = undefined
    const chuckJoke = new Joke()
    const res = await chuckJoke.fetchChuckNorrisJoke()

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})

Deno.test("fetchJod", async() => {
    const res1 = null
    const res2 = undefined
    const chuckJoke = new Joke()
    const res = await chuckJoke.fetchJod()

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})

Deno.test("fetchRandomJoke", async() => {
    const res1 = null
    const res2 = undefined
    const chuckJoke = new Joke()
    const res = await chuckJoke.fetchRandomJoke()

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})

Deno.test("fetchMeme", async() => {
    const res1 = null
    const res2 = undefined
    const chuckJoke = new Joke()
    const res = await chuckJoke.fetchMeme()

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})