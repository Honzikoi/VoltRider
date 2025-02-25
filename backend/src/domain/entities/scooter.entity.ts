import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { MaintenanceLog } from './maintenance.entity';

@Entity('scooters')
export class Scooter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  serialNumber: string;

  @Column()
  model: string;

  @Column({ default: 'available' })
  status: string; // available, in_maintenance, broken

  @Column({ nullable: true })
  lastMaintenanceDate: Date;

  @Column({ type: 'int', default: 0 })
  mileage: number; // Kilometers traveled

  @Column({ type: 'int', default: 0 })
  chargeCycles: number; // Battery cycles

  @Column({ nullable: true })
  currentLocation: string; // For demo rides

  @Column({ type: 'jsonb', nullable: true })
  maintenanceHistory: Array<{
    date: Date;
    description: string;
    cost: number;
    technician: string;
  }>;

  // 🛠️ One-to-Many Relationship with MaintenanceLog
  @OneToMany(() => MaintenanceLog, (maintenance) => maintenance.scooter, {
    cascade: true,
  })
  maintenanceLogs: MaintenanceLog[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
