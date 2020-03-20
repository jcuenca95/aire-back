import { Injectable } from '@nestjs/common';
import { Autonomies } from './autonomies.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutonomiesService extends TypeOrmCrudService<Autonomies> {
  constructor(@InjectRepository(Autonomies) repo) {
    super(repo);
  }
}
