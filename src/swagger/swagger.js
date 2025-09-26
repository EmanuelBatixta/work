import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'API',
    description: 'Documetação API Garantias',
  },
  tags: [
    // by default: empty Array
    {
      name: 'Docs',
    },
    {
      name: 'User', // Tag name
    },
    {
      name: 'Warranty',
    },
  ],
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'Local server',
    },
    {
      url: 'https://termotec.onrender.com',
      description: 'Production server',
    },
  ],
}

const outputFile = './swagger.json'
const routes = ['../../server.js']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc)
