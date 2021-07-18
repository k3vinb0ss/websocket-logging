import { IsEnum } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Priority {
  DEBUG = 1,
  INFO,
  ERROR,
  WTF,
}

@Entity()
export class LogEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsEnum(Priority)
  priority: Priority;

  @Column()
  tag: string;

  @Column()
  content: string;

  @Column({ type: 'datetime' })
  created: Date;
}
