'use strict';

function serverError(req, res, err){
    res.status(500).json({error:err})
}

module.exports = serverError;