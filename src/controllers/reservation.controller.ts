import { Request, Response } from 'express';
import * as reservationRepository from '../repositories/reservation.repository';

export const getAllReservations = async (req: Request, res: Response) => {

    const reservations = await reservationRepository.getAllReservations();
    res.json(reservations);

};

export const getReservationById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const reservation = await reservationRepository.getReservationById(id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ message: 'Reservation not found' });
    }
};

export const createReservation = async (req: Request, res: Response) => {
    const newReservation = await reservationRepository.createReservation(req.body);
    res.status(201).json(newReservation);
};

export const updateReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedReservation = await reservationRepository.updateReservation(id, req.body);
    res.json(updatedReservation);
};

export const deleteReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const deletedReservation = await reservationRepository.deleteReservation(id);
    res.json(deletedReservation);
};

export const updateReservationStatus = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const updatedReservation = await reservationRepository.updateReservationStatus(id, status);
    res.json(updatedReservation);
};