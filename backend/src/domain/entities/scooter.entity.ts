import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { MaintenanceLog } from './maintenance.entity';

@Entity('scooters')
export class Scooter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  serialNumber: string;

  @Column()
  model: string;

  @Column({ default: 'available' })
  status: string; // available, in_maintenance, broken

  @OneToMany(() => MaintenanceLog, (maintenance) => maintenance.scooter)
  maintenanceLogs: MaintenanceLog[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
