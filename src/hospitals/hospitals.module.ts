import { Module } from '@nestjs/common';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitals } from './hospitals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitals])],
  controllers: [HospitalsController],
  providers: [HospitalsService],
})
export class HospitalsModule {}
