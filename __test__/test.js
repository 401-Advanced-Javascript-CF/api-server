'use strict';

const supertest = require('supertest');

const {server} = require('../lib/server.js');
// I need my express app, to pass into supertest

const testServer = supertest(server);

describe('Testing my express app', () => {
  it('should be able to handle a GET against /categories', () => {

    return testServer.get('/categories')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it('adds another item on post request to /caegories', () => {
    const category = {name: 'test', id: 1}
    return testServer
    .post('/categories')
    .send(category)
    .then(res => {
        console.log(res.body);
        expect(res.status).toBe(200)
        expect(res.body.body.name).toEqual('test')
    })
})
it('updates record on put request to /category', () => {
    return testServer
    .put('/categories/1')
    .send({name: "updated", id:1})
    .then(results => {
        expect(results.status).toBe(200)
        expect(results.body.body.name).toEqual('updated')
    })
})
it('deletes record on delete request to /category', () => {
    return testServer
    .delete('/categories/1')
    .then(results => {
        expect(results.body.body).toEqual({})
        expect (results.status).toBe(200)
    })
})

//products

it('should be able to handle a GET against /products', () => {

    return testServer.get('/products')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it('adds another item on post request to /products', () => {
    const category = {name: 'test', id: 1}
    return testServer
    .post('/products')
    .send(category)
    .then(res => {
        console.log(res.body);
        expect(res.status).toBe(200)
        expect(res.body.body.name).toEqual('test')
    })
})
it('updates record on put request to /products', () => {
    return testServer
    .put('/products/1')
    .send({name: "updated", id:1})
    .then(results => {
        expect(results.status).toBe(200)
        expect(results.body.body.name).toEqual('updated')
    })
})
it('deletes record on delete request to /cproducts', () => {
    return testServer
    .delete('/products/1')
    .then(results => {
        expect(results.body.body).toEqual({})
        expect (results.status).toBe(200)
    })
})

});