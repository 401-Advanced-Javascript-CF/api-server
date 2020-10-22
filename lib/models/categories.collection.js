'use strict';

const category = require('../models/categories.schema.js');
const Mongo = require('../models/model.collection.js');

module.exports = new Mongo(category);