import { Router } from 'express';
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  updateReservationStatus,
} from '../controllers/reservation.controller';

const router = Router();

router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.patch('/:id/status', updateReservationStatus);
router.delete('/:id', deleteReservation);

export default router;