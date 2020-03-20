import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Autonomies {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
