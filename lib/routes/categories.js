'use strict';

const express = require('express');
const router = express.Router();
const CategoriesModel = require('../models/categories.schema.js');
const CategoriesCollection = require('../models/categories.collection.js');

let collection = new CategoriesCollection(CategoriesModel);



router.get('/', (req, res, next) => {
    try {
        
        collection.get(req.body).then(result => {
            res.status(200).json(result);
        })
        .catch(err => next(err));
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
   try {
       
       collection.create(req.body).then(result => {
           res.status(200).json(result);
       })
       .catch(err => next(err));
   } catch (error) {
    next(err)
       
   }
})

router.put('/:id', (req, res) => {
    collection.update(req.body, req.params.id).then(result => {
        res.status(200).json(result);
    })
    .catch(err => next(err));
})

router.delete('/:id', (req, res) => {
    collection.delete(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => next(err));
})

module.exports = router;