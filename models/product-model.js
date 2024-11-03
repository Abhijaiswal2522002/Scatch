const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  bgcolor: {
    type: String,
    default: '#FFFFFF' // Set a default color or use empty string if not required
  },
  panelcolor: {
    type: String,
    default: '#FFFFFF'
  },
  textcolor: {
    type: String,
    default: '#000000'
  }
});

module.exports = mongoose.model('Product', productSchema);
