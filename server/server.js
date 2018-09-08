const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

let app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/description', (req, res) => {
  console.log('getting ur stuff bro');
  db.db.findOne({restaurant_ID: 5}).exec((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(3003, () => {
  console.log('listening for u on 3003 bro');
})
