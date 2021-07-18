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
exports.EventsGateway = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const events_dto_1 = require("./events.dto");
const events_repository_1 = require("./events.repository");
let EventsGateway = class EventsGateway {
    constructor(eventsRepository) {
        this.eventsRepository = eventsRepository;
    }
    async receiveLogMessage(data) {
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
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('events'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [events_dto_1.LogEventDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "receiveLogMessage", null);
EventsGateway = __decorate([
    websockets_1.WebSocketGateway(81, { transports: 'websocket' }),
    __param(0, typeorm_1.InjectRepository(events_repository_1.EventsRepository)),
    __metadata("design:paramtypes", [events_repository_1.EventsRepository])
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map