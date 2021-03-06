/// <reference types="node" />
import { Socket } from 'dgram';
import { Server } from 'socket.io';
import { LogEvent } from './event.entity';
import { LogEventDto } from './events.dto';
import { EventsRepository } from './events.repository';
export declare class EventsGateway {
    private eventsRepository;
    constructor(eventsRepository: EventsRepository);
    server: Server;
    receiveLogMessage(data: LogEventDto, socket: Socket): Promise<LogEvent>;
}
