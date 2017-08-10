const request = require('request');

module.exports = {
  gofindRequest: (req, res, next) => {
    let send = {img64: req.body.data};
    let apiAddress =  "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";

    request.post({
      url: apiAddress,
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json"
      }
    }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let results = JSON.parse(body);
        res.json(results);
      }
    })
  }
}
