var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  path: String,
  rating: Number
});

module.exports('Image', ImageSchema);