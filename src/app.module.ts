import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutonomiesModule } from './autonomies/autonomies.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autonomies } from './autonomies/autonomies.entity';
import { Hospitals } from './hospitals/hospitals.entity';
import { HospitalNeedsModule } from './hospital-needs/hospital-needs.module';
import { ResourcesModule } from './resources/resources.module';
import { HospitalNeeds } from './hospital-needs/hospital-needs.entity';
import { Resources } from './resources/resources.entity';
import { Suppliers } from './suppliers/suppliers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'aire',
      entities: [Autonomies, Hospitals, HospitalNeeds, Resources, Suppliers],
      synchronize: true,
    }),
    AutonomiesModule,
    HospitalsModule,
    SuppliersModule,
    HospitalNeedsModule,
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
