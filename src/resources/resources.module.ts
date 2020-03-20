import { Module } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResourcesController } from './resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resources } from './resources.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resources])],
  providers: [ResourcesService],
  controllers: [ResourcesController],
})
export class ResourcesModule {}
