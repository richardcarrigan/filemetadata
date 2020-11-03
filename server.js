'use strict';

const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => res.sendFile(process.cwd() + '/views/index.html'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({ 
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(port, () => console.log(`Node.js listening at port ${port}...`));
