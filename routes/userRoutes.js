
import express from 'express';

const router = express.Router();
let users = []; // Array para armazenar os usuários

//Método POST

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso!
 *       400:
 *         description: Erro na requisição
 */

router.post('/users', (request, response) => {
    const {
        name,
        email,
        password
    } = request.body;

    if (!name || !email || !password) {
        return response.status(400).send('Erro na requisição');
    }

    const user = {
        name,
        email,
        password
    };
    users.push(user);
    response.status(200).send('Usuário criado com sucesso!');
});

// Método GET

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */

router.get('/users', (request, response) => {
    response.status(200).json(users);
});

export default router;
