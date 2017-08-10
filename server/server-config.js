const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const gofindController = require('./gofindController.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/gofind', gofindController.gofindRequest);

module.exports = app;
