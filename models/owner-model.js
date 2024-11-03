const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    default: []
  },
  picture: {
    type: String,
    default: ''
  },
  gstin: {
    type: String,
    // required: true,
    unique: true,
    trim: true
  }
});

module.exports = mongoose.model('Owner', ownerSchema);
