// const swaggerJsdoc = require('swagger-jsdoc');
// const swagger=require('swagger-jsdoc');
// const options={
//     swaggerDefinition:{
//         openapi:'3.0.0',
//         info:{
//          title:"bookstore-app",
//          description:"API for booking books online"
//         },
//         servers:[
//             {
//                 url:'http://localhost:3000/api'
//             }
//         ]
//     },
//     apis:['./routes/*.js']
// };
// const swaggerDocs=swaggerJsdoc(options);
// module.exports=swaggerDocs;
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "bookstore-app",
            description: "API for booking books online"
        },
        servers: [
            {
                url: 'http://localhost:3000/api'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsdoc(options);
module.exports = swaggerDocs;
