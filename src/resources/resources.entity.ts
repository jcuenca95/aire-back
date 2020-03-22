import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Suppliers } from '../suppliers/suppliers.entity';

@Entity()
export class Resources {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
