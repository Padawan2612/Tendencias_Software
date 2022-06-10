import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_student: string;

  @Column({ default: false })
  completed: boolean;

  @Column()
  asignature: string;

  @Column()
  age: number;

  @Column()
  date: Date;

  @Column()
  age1: Date;
}
