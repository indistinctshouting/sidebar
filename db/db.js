const mongoose = require('mongoose');
const key = require('./MONGOOSE_KEY');

const db = mongoose.connect(key.MONGOOSE_KEY);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const RestaurantInfo = new Schema({
  info_ID: ObjectId,
  restaurant_name: String,
  restaurant_ID: Number,
  price_range: String,
  health_score: String,
  menu: Schema.Types.Mixed,
  hours: {
    Mon: String,
    Tue: String,
    Wed: String,
    Thu: String,
    Fri: String,
    Sat: String,
    Sun: String,
  },
});

module.exports = {
  db,
  RestaurantInfo,
  ObjectId,
}
