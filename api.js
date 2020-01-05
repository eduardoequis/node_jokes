  
  let request = require('request');
 
  function APIrequest (keyboard, showMethod) {

    let options = {
        url: `https://icanhazdadjoke.com/search?term=${keyboard}`,
        headers: {
            'Accept': 'application/json'
        }
    };
    
    function request_callback (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        
        let jokes = JSON.parse(body)
        showMethod(jokes)

    }
   
  request(options, request_callback);

}

module.exports = APIrequest
 