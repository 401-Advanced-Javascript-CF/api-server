'use strict';

const express = require('express');
const router = express.Router();

const { getRoute } = require('../../middleware/route-finder.js');


router.param('model', getRoute);

router.get('/:model', (req, res, next) => {
    try {
        
        req.params.model.get(req.body).then(result => {
            res.status(200).json(result);
        })
        .catch(err => next(err));
    } catch (err) {
        next(err)
    }
})

router.post('/:model', (req, res, next) => {
   try {
       
    req.params.model.create(req.body).then(result => {
           res.status(200).json(result);
       })
       .catch(err => next(err));
   } catch (error) {
    next(err)
       
   }
})

router.put('/:model/:id', (req, res) => {
    req.params.model.update(req.body, req.params.id).then(result => {
        res.status(200).json(result);
    })
    .catch(err => next(err));
})

router.delete('/:model/:id', (req, res) => {
    req.params.model.delete(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => next(err));
})

module.exports = router;