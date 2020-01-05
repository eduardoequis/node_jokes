let userInput = require('./input');
let apiRequest = require('./api');
let show = require('./output');
let leaderboard = require('./leaderboard');


//Función que obtiene input, llama a la Api y muestra info.
function getJokes(inputMethod, callbackApi, showMethod) {

inputMethod(callbackApi, showMethod, leaderboard)

}

//Inicia solicitud de palabra
getJokes(userInput, apiRequest, show.Joke)
