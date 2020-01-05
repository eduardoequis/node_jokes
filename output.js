const chalk = require('chalk');
const fs = require('fs');
const { readFile: read, writeFile: write, appendFile: append} = fs;



function showJoke (joke) {
    
    if (joke.total_jokes === 0) {
        console.log(chalk.red('"Acá no hacemos chistes con esas cosas."'))
    } else {
        console.log(chalk.green(joke.results[0].joke))
        writeJoke(joke.results[0].joke)
    }

}

function showLeaderboard (joke, hashtag) {

    console.log(joke + chalk.blue(" " + hashtag))
   
}


function writeJoke(info) {

  let onejoke = info + "\n\n"

  read('jokes.txt', 'utf-8', (err) => {
   
    if (err) {
      console.error(err);
    }

    append('jokes.txt', onejoke, (err) => {
      
        if (err) throw err;
        console.log("Joke writed.")
      })
  })
}

///


module.exports = {Joke: showJoke, 
                  Leaderboard: showLeaderboard}