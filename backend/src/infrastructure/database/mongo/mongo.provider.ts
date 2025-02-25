import { MongoClient } from 'mongodb';
import { Provider } from '@nestjs/common';
import { DatabaseConnection } from '../interfaces/database.interface';

export const MONGO_CONNECTION = 'MONGO_CONNECTION';

export const mongoProvider: Provider = {
  provide: MONGO_CONNECTION,
  useFactory: async (): Promise<DatabaseConnection> => {
    console.log('MONGO_URI:', process.env.MONGODB_URI); // ✅ Debug Log

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    console.log('✅ MongoDB Connected Successfully');

    const db = client.db(process.env.MONGODB_DATABASE!);

    return {
      connect: async () => db,
      disconnect: async () => client.close(),
      getClient: () => client,
    };
  },
};
