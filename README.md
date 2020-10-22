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
 PASS  __test__/test.js
  Testing my express app
    ✓ adds another item on post request to /caegories (55 ms)
    ✓ should be able to handle a GET against /categories (11 ms)
    ✓ updates record on put request to /category (10 ms)
    ✓ deletes record on delete request to /category (10 ms)
    ✓ should be able to handle a GET against /products (6 ms)
    ✓ adds another item on post request to /products (7 ms)
    ✓ updates record on put request to /products (6 ms)
    ✓ deletes record on delete request to /cproducts (6 ms)

---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   85.39 |    46.15 |   66.67 |   86.36 |                   
 lib                       |   83.33 |        0 |       0 |   88.24 |                   
  server.js                |   83.33 |        0 |       0 |   88.24 | 33-34             
 lib/models                |   95.24 |       50 |     100 |   95.24 |                   
  categories.collection.js |     100 |      100 |     100 |     100 |                   
  categories.schema.js     |     100 |      100 |     100 |     100 |                   
  model.collection.js      |   88.89 |       50 |     100 |   88.89 | 14                
  products.collection.js   |     100 |      100 |     100 |     100 |                   
  products.schema.js       |     100 |      100 |     100 |     100 |                   
 lib/routes                |   76.92 |      100 |   66.67 |   76.92 |                   
  model.js                 |   76.92 |      100 |   66.67 |   76.92 | 17-19,29-31,40,48 
 middleware                |    87.5 |     62.5 |      60 |    87.5 |                   
  404.js                   |      50 |      100 |       0 |      50 | 4                 
  500.js                   |      50 |      100 |       0 |      50 | 4                 
  logger.js                |     100 |      100 |     100 |     100 |                   
  route-finder.js          |   90.91 |       75 |     100 |   90.91 | 17                
  timestamp.js             |     100 |       50 |     100 |     100 | 11-12             
---------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.251 s
Ran all test suites. 

## UML
not applicable
Link to an image of the UML for your application and response to events


## Change Log
1.5: *made the routes more dynamic and combined the collections into one file. also updated the tests to reflect these changes* - 21 Oct 2020  
1.4: *figured out how to test for put and delete for categires and products. all tests are now passing* - 21 Oct 2020  
1.3: *modularized server.js and added router for categories and products as well as added mongodb, mongodb crud operations and updated tests to reflect this change* - 21 Oct 2020  
1.2: *added express, modularization* - 20 Oct 2020
1.1: *Use json-server to moch basic esxpress functionality* - 19 Oct 2020
