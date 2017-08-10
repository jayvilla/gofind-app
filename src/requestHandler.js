const axios = require('axios');

// Sends a request to the server with base64value as arg. The server
// returns JSON object with all matching results.
const handleGofindRequest = img64Data => {
  let url = "http://localhost:5000/gofind";

  let options = { data: img64Data };

  return axios.post(url, options)
    .then( results => {
      return results;
    });
};

export default handleGofindRequest;
