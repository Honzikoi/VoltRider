import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../infrastructure/database/database.service';

@Injectable()
export class ScootersService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getScooters(db: 'mongodb' | 'postgresql') {
        const connection = await this.databaseService.connect(db);

        if (db === 'mongodb') {
            return connection.collection('scooters').find().toArray();
        } else if (db === 'postgresql') {
            return connection.query('SELECT * FROM scooters');
        }
    }
}