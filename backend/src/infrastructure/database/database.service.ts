import { Injectable, Inject } from '@nestjs/common';
import { DatabaseConnection } from './interfaces/database.interface';
import { MONGO_CONNECTION } from './mongo/mongo.provider';
import { POSTGRES_CONNECTION } from './postgres/postgres.provider';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(MONGO_CONNECTION)
    private readonly mongoConnection: DatabaseConnection,
    @Inject(POSTGRES_CONNECTION)
    private readonly postgresConnection: DatabaseConnection,
  ) {}

  async connect(db: 'mongodb' | 'postgresql') {
    if (db === 'mongodb') {
      return this.mongoConnection.connect();
    } else if (db === 'postgresql') {
      return this.postgresConnection.connect();
    } else {
      throw new Error('Invalid database type specified');
    }
  }
}
