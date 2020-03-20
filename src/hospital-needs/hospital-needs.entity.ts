import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HospitalNeeds {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
