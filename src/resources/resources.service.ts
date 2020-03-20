import { Injectable } from '@nestjs/common';
import { Resources } from './resources.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResourcesService extends TypeOrmCrudService<Resources> {
  constructor(@InjectRepository(Resources) repo) {
    super(repo);
  }
}
