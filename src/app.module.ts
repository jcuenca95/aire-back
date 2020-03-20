import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutonomyModule } from './autonomy/autonomy.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autonomies } from './autonomy/autonomy.entity';
import { Hospitals } from './hospitals/hospitals.entity';
import { HospitalNeedsModule } from './hospital-needs/hospital-needs.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Gar77919',
      database: 'aire',
      entities: [Autonomies, Hospitals],
      synchronize: true,
    }),
    AutonomyModule,
    HospitalsModule,
    SuppliersModule,
    HospitalNeedsModule,
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
