import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Scooter } from '../../domain/entities/scooter.entity';
import { MaintenanceLog } from '../../domain/entities/maintenance.entity';
import { ScooterSchema } from '../../domain/entities/scooter.schema';

@Module({
  imports: [
    // ✅ Auto-create tables in PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Disable in production, use migrations instead
    }),
    TypeOrmModule.forFeature([Scooter, MaintenanceLog]),

    // ✅ Auto-create collections in MongoDB
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: Scooter.name, schema: ScooterSchema }]),
  ],
  exports: [TypeOrmModule, MongooseModule],
})
export class DatabaseModule {}
