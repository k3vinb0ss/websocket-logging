import { EntityRepository, Repository } from 'typeorm';
import { LogEvent } from './event.entity';

@EntityRepository(LogEvent)
export class EventsRepository extends Repository<LogEvent> {}
