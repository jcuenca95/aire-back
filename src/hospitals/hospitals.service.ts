import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospitals } from './hospitals.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class HospitalsService extends TypeOrmCrudService<Hospitals> {
  constructor(@InjectRepository(Hospitals) repo) {
    super(repo);
  }
}
