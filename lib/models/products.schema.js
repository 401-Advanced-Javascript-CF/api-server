'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  sender: { type: String, required: true },
  created_at: { type: Date, required: true },
  text: { type: String, required: true },

});

module.exports = mongoose.model('Products', userSchema);