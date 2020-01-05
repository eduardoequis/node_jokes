const fs = require('fs');
const mostCommon = require('most-common');
let show = require('./output');
const {readFile: read} = fs;

function getJokesinTxt() {
   
    read('jokes.txt', 'utf-8', (err, data) => {
   
        if (err) {
          console.error(err);
        }

        createJokesArray(data)
       
    })
}

function createJokesArray(text) {
    let alljokes = text.split('\n\n')
    alljokes.pop()
    getMorePopularJoke(alljokes)
    
}

function getMorePopularJoke (array) {
   
    let mostPopular
    let hashtag 

    if (mostCommon(array)[0].count === 1) {
        //If there is no popular / duplicated jokes, get a random one.
        let randomIndex = Math.floor(Math.random()*array.length)
        mostPopular = array[randomIndex]
        hashtag = "#UnoAlAzar"

    } else {
        //The more popular joke is taken.
        mostPopular = mostCommon(array)[0].token
        hashtag = "#ElMásPopular"
    }
    
    show.Leaderboard(mostPopular, hashtag)

}


module.exports = getJokesinTxt