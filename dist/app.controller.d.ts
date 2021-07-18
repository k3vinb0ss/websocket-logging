import { AppService } from './app.service';
import { EventsRepository } from './events/events.repository';
export declare class AppController {
    private readonly appService;
    private eventsRepository;
    constructor(appService: AppService, eventsRepository: EventsRepository);
    root(): Promise<{
        title: string;
        newLogs: {
            priority: string;
            tag: string;
            content: string;
            formatDate: string;
        }[];
    }>;
}
