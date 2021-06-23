# USERS API
## An API that exposes a user resource to return all users, return a specific user, and create a user.

## Resources
### Users
#### GET /api/users - returns all users details
#### GET /api/users/:id - return a specific user detail
#### POST /api/users - create a user

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