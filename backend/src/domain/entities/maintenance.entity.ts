import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Scooter } from './scooter.entity';

@Entity('maintenance_logs')
export class MaintenanceLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @ManyToOne(() => Scooter, (scooter) => scooter.maintenanceLogs, {
    onDelete: 'CASCADE',
  })
  scooter: Scooter; // 🛠️ Ensure this matches `scooter.maintenanceLogs`
}
