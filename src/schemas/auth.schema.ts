/**
 * @openapi
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: usuario@email.com
 *         senha:
 *           type: string
 *           format: password
 *           example: 12345678
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Login realizado com sucesso
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */


/**
 * @openapi
 * /auth:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Realiza login e gera um token JWT
 *     security: []  # Desabilita autenticação JWT aqui
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Sucesso no login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Usuário ou senha inválidos
 */
