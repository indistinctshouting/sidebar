const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/description', (req, res) => {
  console.log('getting ur stuff bro');
  db.findOneRestaurant(5, (err, restaurant) => {
    if (err) {
      console.log('oh no!!! something went wrong with the query');
    } else {
      res.send(restaurant);
    }
  })
});

app.listen(3003, () => {
  console.log('listening for u on 3003 bro');
});
