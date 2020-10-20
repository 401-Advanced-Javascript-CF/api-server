'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const timestamp = require('../middleware/timestamp.js')
const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');


app.use(express.json());
const category = [];
const product = [];
app.use(timestamp);
app.use(logger);

app.get('/categories', (req, res) => {
    res.status(200).json({'category': category});
})

app.post('/categories', (req, res) => {
    req.body.id = 1;
    category.push(req.body)
    res.json({'body': req.body});
})

app.put('/categories/:id', (req, res) => {
    for(let i = 0; i < category.length; i++){
        if(category[i].id === req.body.id){
            category[i] = req.body; 
        }
    }
    res.json({'body': req.body});
})

app.delete('/categories/:id', (req, res) => {
    for(let i = 0; i < category.length; i++){
        if(category[i].id === req.body.id){
            category[i] = null; 
        }
    }
    res.json({'body': req.body});
})

app.get('/products', (req, res) => {
    res.status(200).json({'products': product});
})

app.post('/products', (req, res) => {
    req.body.id = 1;
    product.push(req.body)
    res.json({'body': req.body});
})

app.put('/products/:id', (req, res) => {
    for(let i = 0; i < product.length; i++){
        if(product[i].id === req.body.id){
            product[i] = req.body; 
        }
    }
    res.json({'body': req.body});
})

app.delete('/products/:id', (req, res) => {
    for(let i = 0; i < product.length; i++){
        if(product[i].id === req.body.id){
            product[i] = null; 
        }
    }
    res.json({'body': req.body});
})

app.use('*', notFound);
app.use(serverError);


module.exports = {
    server: app,
    start: function(port){
        const PORT = port || process.env.PORT || 3000
        app.listen(PORT, () => console.log('listening on port'))
    }
}