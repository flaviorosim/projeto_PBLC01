import { Router } from 'express';
import {
  getAllCalendars,
  getCalendarById,
  createCalendar,
  updateCalendar,
  deleteCalendar,
  checkAvailability,
} from '../controllers/calendar.controller';

const router = Router();

router.get('/', getAllCalendars);
router.get('/:id', getCalendarById);
router.post('/', createCalendar);
router.put('/:id', updateCalendar);
router.delete('/:id', deleteCalendar);
router.post('/:id/check-availability', checkAvailability);

export default router;