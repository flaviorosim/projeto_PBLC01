import { Request, Response } from 'express';
import * as calendarRepository from '../repositories/calendar.repository';

export const getAllCalendars = async (req: Request, res: Response) => {
    const calendars = await calendarRepository.getAllCalendars();
    res.json(calendars);

};

export const getCalendarById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const calendar = await calendarRepository.getCalendarById(id);
    if (calendar) {
      res.json(calendar);
    } else {
      res.status(404).json({ message: 'Calendar not found' });
    }

};

export const createCalendar = async (req: Request, res: Response) => {
    const newCalendar = await calendarRepository.createCalendar(req.body);
    res.status(201).json(newCalendar);
  
};

export const updateCalendar = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const updatedCalendar = await calendarRepository.updateCalendar(id, req.body);
  res.json(updatedCalendar);
 
};

export const deleteCalendar = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  
    const deletedCalendar = await calendarRepository.deleteCalendar(id);
    res.json(deletedCalendar);

};

export const checkAvailability = async (req: Request, res: Response) => {
  const calendarId = parseInt(req.params.id);
  const { beginDate, endDate } = req.body;
  const isAvailable = await calendarRepository.checkAvailability(
      calendarId,
      new Date(beginDate),
      new Date(endDate)
  );
  res.json({ isAvailable });
 
};