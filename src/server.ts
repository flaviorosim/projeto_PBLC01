import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import calendarRoutes from './routes/calendar.route';
import reservationRoutes from './routes/reservation.route';
import authRoutes from './routes/auth.route';
import { authMiddleware } from
  './middleware/auth.middleware';

const app = express();
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nest Exchange API',
      version: '1.0.0',
      description: 'API para gerenciar reservas e calendários de hospedagem para estudantes de intercâmbio',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/schemas/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/calendars', calendarRoutes);
app.use('/reservations', reservationRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});