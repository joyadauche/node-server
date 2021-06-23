# USERS API
An API that exposes a user resource to return all users, return a specific user, and create a user.

## Postman Documentation
- [API Service Doc](https://documenter.getpostman.com/view/1407713/TzecB4tR)
- [API Service Test](https://www.getpostman.com/collections/eedab6b8123ccf83b7d7)

## Resources
### Users
#### GET /api/users - returns all users details
#### GET /api/users/:id - return a specific user detail
#### POST /api/users - create a user
#### GET /api/me - gets a logged in user (Kindly note that this commented out - Needs to be uncommented if you want to send a request to this endpoint)
##### Description
By passing an `x-auth-token` in the headers, this endpoint simulates an authenticated user trying to get details on a logged in user.
The `x-auth-token` value used for the simulation is a valid email address. In this case, a valid email address is one that has been successfully created by this API Service as part of a user detail.

### Home
#### GET / - home page

## Run Server
- `git clone https://github.com/joyadauche/node-server.git`
- `cd node-server`
- To run with [Docker](https://docs.docker.com/get-docker/):
    - `docker build -t user--express-node-server  .`     
    - `docker run -it -p 3000:3000 user--express-node-server `
- To run without docker:
    - `npm start`

## Run Tests
`npm test`

## Run Test Coverage
`npm test:coverage`