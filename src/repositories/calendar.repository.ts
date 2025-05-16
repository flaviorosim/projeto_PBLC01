import { PrismaClient, Calendar } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllCalendars = async (): Promise<Calendar[]> => {
  return prisma.calendar.findMany({
    include: {
      host: true,
      reservations: true,
    },
  });
};

export const getCalendarById = async (id: number): Promise<Calendar | null> => {
  return prisma.calendar.findUnique({
    where: { id },
    include: {
      host: true,
      reservations: true,
    },
  });
};

export const createCalendar = async (data: Omit<Calendar, 'id'>): Promise<Calendar> => {
  return prisma.calendar.create({
    data,
    include: {
      host: true,
    },
  });
};

export const updateCalendar = async (id: number, data: Partial<Omit<Calendar, 'id'>>): Promise<Calendar> => {
  return prisma.calendar.update({
    where: { id },
    data,
    include: {
      host: true,
    },
  });
};

export const deleteCalendar = async (id: number): Promise<Calendar> => {
  return prisma.calendar.delete({
    where: { id },
  });
};

export const checkAvailability = async (calendarId: number, beginDate: Date, endDate: Date): Promise<boolean> => {
  const conflictingReservations = await prisma.reservation.count({
    where: {
      calendarId,
      OR: [
        {
          beginDate: { lte: endDate },
          endDate: { gte: beginDate },
        },
      ],
    },
  });

  return conflictingReservations === 0;
};