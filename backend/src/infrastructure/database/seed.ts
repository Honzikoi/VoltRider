import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Scooter } from '../../domain/entities/scooter.entity';
import { MaintenanceLog } from '../../domain/entities/maintenance.entity';
import mongoose from 'mongoose';
import { Scooter as MongoScooter } from '../../domain/entities/scooter.schema';

const seedPostgreSQL = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Scooter, MaintenanceLog],
    synchronize: true, // ⚠️ Use migrations in production
  });

  await dataSource.initialize();

  console.log('🌱 Seeding PostgreSQL...');
  for (let i = 0; i < 10; i++) {
    const scooter = new Scooter();
    scooter.serialNumber = faker.string.uuid();
    scooter.model = faker.vehicle.model();
    scooter.status = faker.helpers.arrayElement([
      'available',
      'in_maintenance',
      'broken',
    ]);

    await dataSource.manager.save(scooter);
  }

  console.log('✅ PostgreSQL Seed Completed!');
  await dataSource.destroy();
};

const seedMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log('🌱 Seeding MongoDB...');
  for (let i = 0; i < 10; i++) {
    const scooter = new MongoScooter({
      serialNumber: faker.string.uuid(),
      scooterModel: faker.vehicle.model(),
      status: faker.helpers.arrayElement([
        'available',
        'in_maintenance',
        'broken',
      ]),
      maintenanceHistory: [],
    });

    await scooter.save();
  }

  console.log('✅ MongoDB Seed Completed!');
  await mongoose.disconnect();
};

(async () => {
  await seedPostgreSQL();
  await seedMongoDB();
})();
