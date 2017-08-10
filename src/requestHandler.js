const axios = require('axios');

const handleGofindRequest = img64Data => {
  let url = "http://localhost:5000/gofind";

  let options = {
    data: img64Data
  }
  return axios.post(url, options)
    .then( results => {
      return results;
    })
}
// const handleGofindRequest = img64Data => {
//   // Initialize request
//   console.log(img64Data);
//   var send = {img64: img64Data};
//   var api_address = "http://localhost:3000/gofind";
//
//   // Make Post Request
//   request.post({
//       url: api_address,
//       body: JSON.stringify(send),
//       headers: {
//         "Content-Type":"application/json"
//       }
//       }, function (error, response, body) {
//       if (!error && response.statusCode === 200) {
//           // Successful call
//           var results = JSON.parse(body);
//           console.log(results);
//       }
//   });
// }

export default handleGofindRequest;
