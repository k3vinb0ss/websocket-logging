import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from './events.gateway';
import { EventsRepository } from './events.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EventsRepository])],
  providers: [EventsGateway],
})
export class EventsModule {}
