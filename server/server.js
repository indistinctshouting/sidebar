const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static(__dirname + '/../client/dist'));

app.get('/summary/id/:id', (req, res) => {
  console.log('getting ur stuff bro');
  console.log(req.params.id)
  db.findOneRestaurant(req.params.id, (err, restaurant) => {
    if (err) {
      console.log('oh no!!! something went wrong with the query');
    } else {
      res.send(restaurant);
    }
  })
});

app.listen(3000, () => {
  console.log('listening for u on 3000 bro');
});
