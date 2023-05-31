const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  imageURL: String,
  title: String,
  description: String,
  startTime: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
  currentDate: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  category: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
