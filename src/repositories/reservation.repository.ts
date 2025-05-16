import { PrismaClient, Reservation } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllReservations = async (): Promise<Reservation[]> => {
  return prisma.reservation.findMany({
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};

export const getReservationById = async (id: number): Promise<Reservation | null> => {
  return prisma.reservation.findUnique({
    where: { id },
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};

export const createReservation = async (data: Omit<Reservation, 'id'>): Promise<Reservation> => {
  return prisma.reservation.create({
    data,
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};

export const updateReservation = async (id: number, data: Partial<Omit<Reservation, 'id'>>): Promise<Reservation> => {
  return prisma.reservation.update({
    where: { id },
    data,
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};

export const deleteReservation = async (id: number): Promise<Reservation> => {
  return prisma.reservation.delete({
    where: { id },
  });
};

export const updateReservationStatus = async (id: number, status: string): Promise<Reservation> => {
  return prisma.reservation.update({
    where: { id },
    data: { status },
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};