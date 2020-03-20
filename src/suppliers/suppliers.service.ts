import { Injectable } from '@nestjs/common';
import { Suppliers } from './suppliers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class SuppliersService extends TypeOrmCrudService<Suppliers> {
  constructor(@InjectRepository(Suppliers) repo) {
    super(repo);
  }
}
