'use strict';


const express = require('express');
const router = express.Router();
const product = [];
const ProductsModel = require('../models/products.schema.js');
const ProductsCollection = require('../models/products.collection.js');

let collection = new ProductsCollection(ProductsModel);


router.get('/', (req, res, next) => {
    try {
        
        collection.get(req.body).then(result => {
            res.status(200).json(result);
        })
        .catch(err => next(err));
    } catch (error) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
   try {
       
       collection.create(req.body).then(result => {
           res.json(result);
       })
       .catch(err => next(err));
   } catch (error) {
    next(error)
       
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
