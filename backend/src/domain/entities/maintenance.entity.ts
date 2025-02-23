import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Scooter } from './scooter.entity';

@Entity('maintenance_logs')
export class MaintenanceLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Scooter, (scooter) => scooter.maintenanceLogs, { onDelete: 'CASCADE' })
  scooter: Scooter;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @Column()
  technician: string;

  @CreateDateColumn()
  date: Date;
}
