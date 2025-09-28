import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'API',
    description: 'Documetação API Garantias',
  },
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'Local server',
    },
    {
      url: 'https://termotec.onrender.com',
      description: 'Production server',
    },
    {
      url: 'http://termotec.onrender.com',
      description: 'Try bug cors',
    },
  ],
  components: {
    schemas: {
      Warranty: {
        type: 'object',
        required: ['fname', 'lname', 'item', 'status', 'sales'],
        properties: {
          fname: { type: 'string', example: 'Jorge' },
          lname: { type: 'string', example: 'Smith' },
          keys: { type: 'array', example: [123, 456] },
          item: { type: 'array', example: ['MC1500TF15', 'MKP300AP'] },
          status: {
            type: 'string',
            enum: ['pending', 'sent', 'approved', 'rejected'],
            example: 'pending',
          },
          observations: { type: 'string', example: 'Is broken' },
          sales: { type: 'number', example: 3200 },
        },
      },
      Product: {
        type: 'object',
        required: ['productName', 'price', 'value'],
        properties: {
          productName: { type: 'string', example: 'Air Conditioner' },
          price: { type: 'number', example: 3200 },
          stock: { type: 'integer', example: 10 },
          value: { type: 'number', example: 2500 },
        },
      },
    },
  },
}

const outputFile = './swagger.json'
const routes = ['../../server.js']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc)
