import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Hospitals } from '../hospitals/hospitals.entity';
import { Resources } from '../resources/resources.entity';
import { Frequency } from '../generic/frequency.enum';

@Entity()
export class HospitalNeeds {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => Hospitals)
  hospitals: Hospitals;

  @OneToOne(type => Resources)
  resources: Resources;

  @Column()
  quantity: number;

  @Column({
    type: 'enum',
    enum: Frequency,
    default: Frequency.DAY,
  })
  frequency: string;

  @Column()
  notes: string;
}
