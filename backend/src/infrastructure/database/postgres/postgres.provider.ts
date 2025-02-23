import { Pool } from 'pg';
import { Provider } from '@nestjs/common';
import { DatabaseConnection } from '../interfaces/database.interface';

export const POSTGRES_CONNECTION = 'POSTGRES_CONNECTION';

export const postgresProvider: Provider = {
    provide: POSTGRES_CONNECTION,
    useFactory: async (): Promise<DatabaseConnection> => {
        console.log('POSTGRES DATABASE_URL:', process.env.DATABASE_URL); // ✅ Debug Log

        const pool = new Pool({
            connectionString: process.env.DATABASE_URL, // ✅ Use DATABASE_URL
        });

        await pool.connect();
        console.log('✅ PostgreSQL Connected Successfully');

        return {
            connect: async () => pool,
            disconnect: async () => pool.end(),
            getClient: () => pool,
        };
    },
};
