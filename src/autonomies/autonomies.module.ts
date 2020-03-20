import { Module } from '@nestjs/common';
import { AutonomiesController } from './autonomies.controller';
import { AutonomiesService } from './autonomies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autonomies } from './autonomies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autonomies])],
  controllers: [AutonomiesController],
  providers: [AutonomiesService],
})
export class AutonomiesModule {}
