# LAB - Class 01

## Project: API Server

### Author: Bryant Davis

## Links and Resources

- [GitHub](https://github.com/BryantDavis-401-advanced-javascript/api-server)


## Setup

### `.env` requirements (where applicable)


- `MONGODB` - URL to the running mongo instance/db
- `PORT` - desired port to be used for express


### How to initialize/run your application (where applicable)

### command lines
- `npm init`
- `npm i -y`
- `nodemon`
- use postman/swagger inspector to utilize paths
    - GET: `http://localhost:3000/categories/`
    - GET: `http://localhost:3000/products/`
    - POST: `http://localhost:3000/categories/`
    - POST: `http://localhost:3000/products/`
    - PUT: `http://localhost:3000/categories/:id`       be sure to copy the id from the returned object from the post or get
    - PUT: `http://localhost:3000/products/:id`         be sure to copy the id from the returned object from the post or get
    - DELETE: `http://localhost:3000/categories/:id`    be sure to copy the id from the returned object from the post or get
    - DELETE: `http://localhost:3000/categories/:id`    be sure to copy the id from the returned object from the post or get

## Tests
- `npm test test.js`
- Test Suites: 1 passed, 1 total
- Tests:       8 passed, 8 total
- Snapshots:   0 total
- Time:        1.584 s, estimated 2 s
    ✓ updates record on put request to /category (10 ms)  
    ✓ deletes record on delete request to /category (7 ms)  
    ✓ should be able to handle a GET against /products (5 ms)  
    ✓ adds another item on post request to /products (7 ms)  
    ✓ updates record on put request to /products (5 ms)  
    ✓ deletes record on delete request to /cproducts (5 ms)  

## UML
not applicable
Link to an image of the UML for your application and response to events


## Change Log
1.4: *figured out how to test for put and delete for categires and products. all tests are now passing* - 21 Oct 2020  
1.3: *modularized server.js and added router for categories and products as well as added mongodb, mongodb crud operations and updated tests to reflect this change* - 21 Oct 2020  
1.2: *added express, modularization* - 20 Oct 2020
1.1: *Use json-server to moch basic esxpress functionality* - 19 Oct 2020
