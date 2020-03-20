import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() telephone: string;

  @Column() address: string;

  @Column() location: string;
}
