import { Controller, Get, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { EventsRepository } from './events/events.repository';
import { Priority } from './events/event.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const logEvents = await this.eventsRepository.find({
      order: { created: 'DESC' },
    });

    const newLogs = logEvents.map((item) => {
      const formatDate = new Date(item.created).toLocaleString();
      return {
        priority: Priority[item.priority],
        tag: item.tag,
        content: item.content,
        formatDate,
      };
    });
    return { title: 'Flutter Socket Logging', newLogs };
  }
}
