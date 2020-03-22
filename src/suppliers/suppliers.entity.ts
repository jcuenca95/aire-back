import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Resources } from '../resources/resources.entity';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() telephone: string;

  @Column() address: string;

  @Column() location: string;

  @ManyToMany(type => Resources)
  @JoinTable()
  resources: Array<Resources>;
}
