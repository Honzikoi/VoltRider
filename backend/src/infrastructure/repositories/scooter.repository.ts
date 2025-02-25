import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scooter } from 'domain/entities/scooter.entity';

@Injectable()
export class ScooterRepository {
  constructor(
    @InjectRepository(Scooter)
    private readonly scooterRepo: Repository<Scooter>,
  ) {}

  // 🚀 Create a new scooter
  async create(scooter: Partial<Scooter>): Promise<Scooter> {
    const newScooter = this.scooterRepo.create(scooter);
    return await this.scooterRepo.save(newScooter);
  }

  // 🔍 Find all scooters
  async findAll(): Promise<Scooter[]> {
    return await this.scooterRepo.find();
  }

  // 📄 Find one scooter by ID
  async findById(id: string): Promise<Scooter | null> {
    return await this.scooterRepo.findOne({ where: { id } });
  }

  // 🔄 Update scooter
  async update(id: string, updateData: Partial<Scooter>): Promise<Scooter> {
    await this.scooterRepo.update(id, updateData);
    return (await this.findById(id))!;
  }

  // ❌ Delete scooter
  async delete(id: string): Promise<void> {
    await this.scooterRepo.delete(id);
  }

  // 🔍 Find by status (example)
  async findByStatus(status: string): Promise<Scooter[]> {
    return await this.scooterRepo.find({ where: { status } });
  }
}
