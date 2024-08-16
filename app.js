
import express from 'express';
import setupSwagger from './swagger.js';
import routes from './routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

//Configurando o Swagger
setupSwagger(app);

//Usando as rotas
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});