import { PrismaClient } from '../generated/prisma';
import argon2 from 'argon2';

const prisma = new PrismaClient();



  async function main() {
  const senhaHash = await argon2.hash('senha123');
  const senhaHash2 = await argon2.hash('senha456');

  const user1 = await prisma.user.create({
    data: {
      name: "flavio",
      email: "flavio@yahoo.com",
      password: senhaHash,
      birthDate: new Date("2002-05-10"),
      senha: senhaHash
    }
  });

  const user2 = await prisma.user.create({
    data: {
      name: "joana",
      email: "joana@seila.com",
      password: senhaHash2,
      birthDate: new Date("1998-11-20"),
      senha: senhaHash2
    }
  });

  await prisma.profile.create({
    data: {
      biography: "Gosto de viajar",
      userRating: 4.5,
      suggestions: "Pastelaria boa aqui perto",
      userId: user1.id,
    }
  });

   await prisma.rating.createMany({
      data: [
        {
          grade: 5,
          comment: "Otimo hospede",
          evaluatorId: user2.id,
          evaluatedId: user1.id,
        },
        {
          grade: 4,
          comment: "Organizado e educado",
          evaluatorId: user1.id,
          evaluatedId: user2.id,
        },
      ],
    });

    const host1 = await prisma.host.create({
        data: {
            houseRules: "Tem que lavar louça",
            user: { 
                connect: {
                    id: user2.id 
                }
            }
        }
    });


  const calendar = await prisma.calendar.create({
      data: {
        availability: [new Date("2025-06-01"), new Date("2025-06-15")],
        hostId: host1.id,
      }
    });

  const student = await prisma.exchangeStudent.create({
    data: {
      nationality: "Brasileiro",
      speakingLanguages: "Portugês, Inglês",
      
    }
  });

  const accommodation = await prisma.accommodation.create({
    data: {
      description: "Casa com 3 quartos, 2 banheiros em bairro tranquilo",
      capacity: 2,
      hostId: host1.id
    }
  });

  await prisma.address.create({
    data: {
      zipCode: "12345-678",
      country: "Brazil",
      city: "Piquete",
      street: "Rua dos burguers",
      number: 123,
      hostId: host1.id,
      accommodationId: accommodation.id
    }
  });

  await prisma.reservation.create({
    data: {
      beginDate: new Date("2025-06-01"),
      endDate: new Date("2025-06-15"),
      status: "confirmada",
      exchangeStudentId: student.id,
      calendarId: calendar.id
    }
  });

  await prisma.message.create({
      data: {
        body: "Gostaria de saber mais sobre a casa e região.",
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
