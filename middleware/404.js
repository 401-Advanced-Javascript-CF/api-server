'use strict';

function notFound(req, res){
    res.status(404).json({error:'route not found'})
}

module.exports = notFound;