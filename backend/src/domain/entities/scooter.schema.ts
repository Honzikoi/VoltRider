import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Scooter extends Document {
  @Prop({ required: true })
  serialNumber: string;

  @Prop({ required: true })
  scooterModel: string;

  @Prop({ default: 'available' })
  status: string;

  @Prop({ type: Date, default: Date.now })
  lastMaintenanceDate: Date;
}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);
