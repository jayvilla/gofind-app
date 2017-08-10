const app = require('./server-config.js');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:5000");
})

module.exports = app;
