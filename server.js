'use strict';

const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 3000;

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(port, function () {
  console.log(`Node.js listening at port ${port}...`);
});
