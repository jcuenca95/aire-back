import { Module } from '@nestjs/common';
import { HospitalNeedsService } from './hospital-needs.service';
import { HospitalNeedsController } from './hospital-needs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalNeeds } from './hospital-needs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalNeeds])],
  providers: [HospitalNeedsService],
  controllers: [HospitalNeedsController],
})
export class HospitalNeedsModule {}
