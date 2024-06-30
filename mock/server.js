const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock-data.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();
const loginMiddleware = require('./mock-api'); // Your custom middleware

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use the login middleware
server.use(loginMiddleware);

// Default route to use the router
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});