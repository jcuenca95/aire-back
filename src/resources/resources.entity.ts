import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Resources {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
