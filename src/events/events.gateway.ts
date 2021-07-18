import { InjectRepository } from '@nestjs/typeorm';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { LogEvent } from './event.entity';
import { LogEventDto } from './events.dto';
import { EventsRepository } from './events.repository';

@WebSocketGateway(81, { transports: 'websocket' })
export class EventsGateway {
  constructor(
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  async receiveLogMessage(@MessageBody() data: LogEventDto): Promise<LogEvent> {
    console.log('[EventSocket] ', data);
    const { priority, tag, content } = data;

    const logEvent = this.eventsRepository.create({
      priority,
      tag,
      content,
      created: Date.now(),
    });

    this.eventsRepository.save(logEvent);

    return logEvent;
  }
}
