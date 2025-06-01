// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Number of fake items you want to create
  const COUNT = 20;

  // Build an array of `COUNT` fake items
  const fakeItems = Array.from({ length: COUNT }).map(() => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    // price: random float between 1.00 and 100.00
    price: faker.commerce.price({ min: 1, max: 100, dec: 2, symbol: '€' }),
    // randomly true/false
    inStock: faker.datatype.boolean(),
    // `createdAt` and `updatedAt` will be filled by Prisma defaults
  }));

  // Insert them
  await prisma.item.createMany({
    data: fakeItems,
    skipDuplicates: true,
  });

  console.log(`✅ Seeded ${COUNT} items to the database.`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
