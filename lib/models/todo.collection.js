'use strict';

const todo = require('../models/todo.schema.js');
const Mongo = require('../models/model.collection.js');

module.exports = new Mongo(todo);