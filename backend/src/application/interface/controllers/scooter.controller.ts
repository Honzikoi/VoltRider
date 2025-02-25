import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ScooterService } from 'application/scooter.service';
import {
  CreateScooterDto,
  UpdateScooterStatusDto,
} from 'application/interface/dto/scooter.dto';

@Controller('scooters')
export class ScooterController {
  constructor(private readonly scooterService: ScooterService) {}

  // 🚀 Create a new scooter
  @Post()
  async createScooter(@Body() createDto: CreateScooterDto) {
    return await this.scooterService.create(createDto);
  }

  // 🔍 Get all scooters
  @Get()
  async findAllScooters() {
    return await this.scooterService.findAll();
  }

  // 📄 Get a single scooter by ID
  @Get(':id')
  async findScooterById(@Param('id') id: string) {
    return await this.scooterService.findOne(id);
  }

  // 🔄 Update scooter status (e.g., available → in_maintenance)
  @Patch(':id/status')
  async updateScooterStatus(
    @Param('id') id: string,
    @Body() updateDto: UpdateScooterStatusDto,
  ) {
    return await this.scooterService.updateStatus(id, updateDto);
  }

  // ❌ Delete a scooter by ID
  @Delete(':id')
  async deleteScooter(@Param('id') id: string) {
    return await this.scooterService.remove(id);
  }
}
