import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  completed: boolean;

  @Column()
  date_creation: Date;

  @Column()
  date_finish: Date;

  @Column()
  course: string;
}
