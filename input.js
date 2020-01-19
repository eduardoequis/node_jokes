
const prompt = require('prompt');

function request_prompt (callbackApi, showMethod, leaderboard) {

    prompt.start() 
  // Get value from the user: keyboard
    prompt.get(['keyboard'], function (err, result) {
        // Log the results.
        console.log('Input received');

        word = result.keyboard
        // Evaluate the word to know how to proceed: call leaderboard or the API.
        if (word === 'leaderboard') {
            leaderboard()
        } else {
            callbackApi(word, showMethod)
        }
    });
}

module.exports = request_prompt