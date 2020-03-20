import { Injectable } from '@nestjs/common';
import { HospitalNeeds } from './hospital-needs.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HospitalNeedsService extends TypeOrmCrudService<HospitalNeeds> {
  constructor(@InjectRepository(HospitalNeeds) repo) {
    super(repo);
  }
}
