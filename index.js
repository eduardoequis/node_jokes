let userInput = require('./input');
let apiRequest = require('./api');
let showMethod = require('./output');
let leaderboard = require('./leaderboard');

//Función que obtiene input. Mientras, por callback: llama a la Api y muestra info y consulta leaderboard.
userInput(apiRequest, showMethod.Joke, leaderboard) // 