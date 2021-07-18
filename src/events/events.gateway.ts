import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  async receiveTestMessage(@MessageBody() data: string): Promise<string> {
    console.log('[EventSocket] ', data);
    return `Acked ${data}`;
  }

  @SubscribeMessage('channel2')
  async receiveChannel2(@MessageBody() data: string): Promise<string> {
    console.log('[EventSocket] channel2: ', data);
    return `Acked from channel 2: ${data}`;
  }
}
