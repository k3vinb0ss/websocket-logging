import { InjectRepository } from '@nestjs/typeorm';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'socket.io';
import { LogEvent } from './event.entity';
import { LogEventDto } from './events.dto';
import { EventsRepository } from './events.repository';

@WebSocketGateway({ transports: 'websocket' })
export class EventsGateway {
  constructor(
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  async receiveLogMessage(
    @MessageBody() data: LogEventDto,
    @ConnectedSocket() socket: Socket,
  ): Promise<LogEvent> {
    console.log('[EventSocket] ', data);
    const { priority, tag, content } = data;

    const logEvent = this.eventsRepository.create({
      priority,
      tag,
      content,
      created: Date.now(),
    });

    this.eventsRepository.save(logEvent);

    // emit to others, in this case it's web loggers
    this.server.emit('logging', data);

    return logEvent;
  }
}
