"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const events_repository_1 = require("./events/events.repository");
const event_entity_1 = require("./events/event.entity");
let AppController = class AppController {
    constructor(appService, eventsRepository) {
        this.appService = appService;
        this.eventsRepository = eventsRepository;
    }
    async root() {
        const logEvents = await this.eventsRepository.find({
            order: { created: 'DESC' },
        });
        const newLogs = logEvents.map((item) => {
            const formatDate = new Date(item.created).toLocaleString();
            return {
                priority: event_entity_1.Priority[item.priority],
                tag: item.tag,
                content: item.content,
                formatDate,
            };
        });
        return { title: 'Flutter Socket Logging', newLogs };
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
AppController = __decorate([
    common_1.Controller(),
    __param(1, typeorm_1.InjectRepository(events_repository_1.EventsRepository)),
    __metadata("design:paramtypes", [app_service_1.AppService,
        events_repository_1.EventsRepository])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map