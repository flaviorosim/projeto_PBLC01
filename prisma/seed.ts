import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // 1. Criar usuários
  const user1 = await prisma.user.create({
    data: {
      name: "flavio",
      email: "flavio@yahoo.com",
      password: "123",
      birthDate: new Date("2002-05-10"),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "joana",
      email: "joana@seila.com",
      password: "456",
      birthDate: new Date("1998-11-20"),
    },
  });

  // 2. Criar perfil do usuário 1
  await prisma.profile.create({
    data: {
      biography: "Traveler and culture lover.",
      userRating: 4.5,
      suggestions: "Visit local museums and restaurants.",
      userId: user1.id,
    },
  });

  // 3. Criar avaliações
  await prisma.rating.createMany({
    data: [
      {
        grade: 5,
        comment: "Excellent guest!",
        evaluatorId: user2.id,
        evaluatedId: user1.id,
      },
      {
        grade: 4,
        comment: "Very kind and clean.",
        evaluatorId: user1.id,
        evaluatedId: user2.id,
      },
    ],
  });

  // 4. Criar host
  const host = await prisma.host.create({
    data: {
      houseRules: "No smoking indoors.",
    },
  });

  // 5. Criar exchange student
  const student = await prisma.exchangeStudent.create({
    data: {
      nationality: "Brazilian",
      speakingLanguages: "Portuguese, English",
    },
  });

  // 6. Criar accommodation
  const accommodation = await prisma.accommodation.create({
    data: {
      description: "Private room in quiet neighborhood",
      capacity: 2,
      hostId: host.id,
    },
  });

  // 7. Criar endereço
  await prisma.address.create({
    data: {
      zipCode: "12345-678",
      country: "Brazil",
      city: "Piquete",
      street: "Rua dos burguers",
      number: 123,
      hostId: host.id,
      accommodationId: accommodation.id,
    },
  });

  // 8. Criar calendário
  const calendar = await prisma.calendar.create({
    data: {
      availability: [new Date("2025-06-01"), new Date("2025-06-15")],
      hostId: host.id,
    },
  });

  // 9. Criar reserva
  await prisma.reservation.create({
    data: {
      beginDate: new Date("2025-06-01"),
      endDate: new Date("2025-06-15"),
      status: "confirmed",
      hostId: host.id,
      exchangeStudentId: student.id,
      calendarId: calendar.id,
    },
  });

  // 10. Criar mensagem
  await prisma.message.create({
    data: {
      body: "Hello! Looking forward to the stay.",
      issueDate: new Date("2025-05-01"),
      senderId: user1.id,
      receiverId: user2.id,
    },
  });
}

main()
  .then(() => {
    console.log('Seed concluído');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
