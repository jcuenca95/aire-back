import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { Suppliers } from './suppliers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Suppliers])],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
