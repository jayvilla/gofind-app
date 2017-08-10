const request = require('request');

module.exports = {
  // Takes the base64value sent by the client and formats request
  // to send to the RESTful Gofind API.
  gofindRequest: (req, res, next) => {
    let send = {img64: req.body.data};
    let apiAddress =  "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";

    request.post({
      url: apiAddress,
      body: JSON.stringify(send),
      headers: { "Content-Type": "application/json" }
      }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let results = JSON.parse(body);
        res.json(results);
      };
    });
  }
};
