import { Module } from '@nestjs/common';
import { AutonomyController } from './autonomy.controller';
import { AutonomyService } from './autonomy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autonomies } from './autonomy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autonomies])],
  controllers: [AutonomyController],
  providers: [AutonomyService],
})
export class AutonomyModule {}
