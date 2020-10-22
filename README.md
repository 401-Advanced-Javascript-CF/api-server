# LAB - Class 01

## Project: Notes

### Author: Bryant Davis

### Links and Resources

- [GitHub](https://github.com/BryantDavis-401-advanced-javascript/api-server) (GitHub Actions)


### Setup

#### `.env` requirements (where applicable)


- `MONGODB` - URL to the running mongo instance/db
- `PORT` - desired port to be used for express


#### How to initialize/run your application (where applicable)

#### command lines
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

#### Tests
- `npm test test.js`
was unsure how to test for PUT or DELETE when every time I run the tests the id's that would get returned would be different because it would be a new instance of the db.
so the put and delete tests have been commented out for now and only get and post are currently running

#### UML
not applicable
Link to an image of the UML for your application and response to events
