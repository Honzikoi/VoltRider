import { Controller, Get, Query } from '@nestjs/common';
import { DatabaseService } from '../infrastructure/database/database.service';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Get('connect')
    async connect(@Query('db') db: 'mongodb' | 'postgresql') {
        return this.databaseService.connect(db);
    }
}