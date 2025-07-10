import { PrismaClient, Reservation } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllReservations = async (): Promise<Reservation[]> => {
  return prisma.reservation.findMany({
   include: {
      exchangeStudent: true, 
      calendar: {           
        include: {
          host: {           
            include: {
              user: true,
              address: true
            }
          }
        }
      }
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
  const dataWithCorrectDates = {
    ...data,
    beginDate: new Date(data.beginDate),
    endDate: new Date(data.endDate),
  };

  return prisma.reservation.create({
    data: dataWithCorrectDates,
    include: {
      exchangeStudent: true,
      calendar: true,
    },
  });
};

export const updateReservation = async (id: number, data: Partial<Omit<Reservation, 'id'>>): Promise<Reservation> => {
  
  const dataToUpdate = { ...data };

    // Verificamos se uma nova data de início foi enviada na requisição.
    // Se sim, convertemos para o tipo Date.
    if (data.beginDate) {
        dataToUpdate.beginDate = new Date(`${data.beginDate as unknown as string}T00:00:00`);
    }

    // Fazemos o mesmo para a data final.
    if (data.endDate) {
        dataToUpdate.endDate = new Date(`${data.endDate as unknown as string}T00:00:00`);
    }
  return prisma.reservation.update({
    where: { id },
    data: dataToUpdate,
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