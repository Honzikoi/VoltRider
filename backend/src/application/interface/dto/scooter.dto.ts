import { IsString, IsEnum, IsOptional, IsInt, Min } from 'class-validator';

export class CreateScooterDto {
  @IsString()
  serialNumber: string;

  @IsString()
  model: string;

  @IsEnum(['available', 'in_maintenance', 'broken'])
  status: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  mileage?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  chargeCycles?: number;
}

export class UpdateScooterStatusDto {
  @IsEnum(['available', 'in_maintenance', 'broken'])
  status: string;
}
