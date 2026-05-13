import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'stiven',
      password: '1234',
      database: 'prueba',
      entities: [Employee], // Añade tus entidades aquí
      synchronize: true, // ¡No usar en producción!
    }),
    EmployeesModule,
  ],
})
export class AppModule {}
