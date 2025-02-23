// import { Controller, Get } from '@nestjs/common';
// import { 
//   HealthCheck, 
//   HealthCheckService, 
//   TypeOrmHealthIndicator,
//   MongooseHealthIndicator
// } from '@nestjs/terminus';
// import { DatabaseConnectionService, DatabaseType } from '../../infrastructure/database/db-connection.service';

// @Controller('health')
// export class HealthController {
//   constructor(
//     private health: HealthCheckService,
//     private typeorm: TypeOrmHealthIndicator,
//     private mongoose: MongooseHealthIndicator,
//     private dbConnectionService: DatabaseConnectionService
//   ) {}

//   @Get()
//   @HealthCheck()
//   async check() {
//     const postgresConnection = await this.dbConnectionService.connect(DatabaseType.POSTGRES);
//     const mongoConnection = await this.dbConnectionService.connect(DatabaseType.MONGODB);

//     return this.health.check([
//       () => this.typeorm.pingCheck('postgres', { timeout: 1500 }),
//       () => this.mongoose.pingCheck('mongodb', { timeout: 1500 }),
//       () => ({
//         postgres: {
//           status: postgresConnection ? 'up' : 'down'
//         },
//         mongodb: {
//           status: mongoConnection ? 'up' : 'down'
//         }
//       })
//     ]);
//   }
// }