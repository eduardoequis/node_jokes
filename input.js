
const prompt = require('prompt');

function request_prompt (callback, showMethod, leaderboard) {

    prompt.start() 
  // Get property from the user: keyboard
    prompt.get(['keyboard'], function (err, result) {
        // Log the results.
        console.log('Input received:');
        console.log(' keyboard: ' + result.keyboard);

        let words = result.keyboard.split(" ")

        if (words.length === 1) {
            console.log(words[0])
            callback(words[0], showMethod)
        } else if (words[1] === 'leaderboard') {
            leaderboard()
        } else {
            callback(words[0], showMethod)
        }

        //Send input to a function
       
    });

}

module.exports = request_prompt