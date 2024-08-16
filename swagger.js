
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API',
            version: '1.0.0',
            description: 'API de cadastro de usuários',
            contact: {
                name: 'Wanessa Thaylanny',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [
        './routes/*.js',
    ],
};

const swaggerDocs = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
};

export default setupSwagger;
