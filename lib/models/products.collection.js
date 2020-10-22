'use strict';

const product = require('../models/products.schema.js');
const Mongo = require('../models/model.collection.js');

module.exports = new Mongo(product);