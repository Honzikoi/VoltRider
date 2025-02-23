import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Scooter extends Document {
  @Prop({ required: true, unique: true })
  serialNumber!: string;

  @Prop({ required: true })
  scooterModel!: string; // ✅ Renamed to avoid conflict

  @Prop({ default: 'available' })
  status!: string;

  @Prop({ type: [{ date: Date, description: String, cost: Number, technician: String }] })
  maintenanceHistory!: {
    date: Date;
    description: string;
    cost: number;
    technician: string;
  }[];
}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);
export type ScooterDocument = Scooter & Document;
