const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoitem: { type: String, required: true },
  difficulty: { type: String, required: true },
  assigned: { type: String, required: true },

});

module.exports = mongoose.model('ToDo', todoSchema);