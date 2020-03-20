import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { Suppliers } from './suppliers.entity';

@Module({
  imports: [Suppliers],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
