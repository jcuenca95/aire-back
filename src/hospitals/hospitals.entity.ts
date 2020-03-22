import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hospitals {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() telephone: string;

  @Column() address: string;

  @Column() location: string;

  @Column() mainContact: string;
}
