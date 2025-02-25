import { Injectable, NotFoundException } from '@nestjs/common';
import { Scooter } from 'domain/entities/scooter.entity';
import {
  CreateScooterDto,
  UpdateScooterStatusDto,
} from 'application/interface/dto/scooter.dto';
import { ScooterRepository } from 'infrastructure/repositories/scooter.repository';

@Injectable()
export class ScooterService {
  constructor(private readonly scooterRepo: ScooterRepository) {}

  // 🚀 Create a scooter
  async create(dto: CreateScooterDto): Promise<Scooter> {
    return await this.scooterRepo.create(dto);
  }

  // 🔍 Find all scooters
  async findAll(): Promise<Scooter[]> {
    return await this.scooterRepo.findAll();
  }

  // 📄 Find one scooter by ID
  async findOne(id: string): Promise<Scooter> {
    const scooter = await this.scooterRepo.findById(id);
    if (!scooter)
      throw new NotFoundException(`Scooter with ID ${id} not found.`);
    return scooter;
  }

  // 🔄 Update status
  async updateStatus(
    id: string,
    dto: UpdateScooterStatusDto,
  ): Promise<Scooter> {
    return await this.scooterRepo.update(id, { status: dto.status });
  }

  // ❌ Delete scooter
  async remove(id: string): Promise<void> {
    await this.scooterRepo.delete(id);
  }
}
