'use strict';


function logger(req, res, next) {
    console.log(`Path: ${req.path} Method: ${req.method} time: ${req.requestTime}`);
    // call next within a piece of middleware to move to the next function in line to run
    next();
  };
  
  module.exports = logger;