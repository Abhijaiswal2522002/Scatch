const mongoose=require('mongoose');



const userSchema = new mongoose.Schema({
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
    required: true,
  },
  cart: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  orders: {
    type: Array,
    default: []
  },
  contact: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('User', userSchema);
