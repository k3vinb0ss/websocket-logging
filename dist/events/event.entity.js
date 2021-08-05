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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogEvent = exports.Priority = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
var Priority;
(function (Priority) {
    Priority[Priority["DEBUG"] = 0] = "DEBUG";
    Priority[Priority["INFO"] = 1] = "INFO";
    Priority[Priority["ERROR"] = 2] = "ERROR";
    Priority[Priority["WTF"] = 3] = "WTF";
})(Priority = exports.Priority || (exports.Priority = {}));
let LogEvent = class LogEvent {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], LogEvent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsEnum(Priority),
    __metadata("design:type", Number)
], LogEvent.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], LogEvent.prototype, "tag", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEvent.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Date)
], LogEvent.prototype, "created", void 0);
LogEvent = __decorate([
    typeorm_1.Entity()
], LogEvent);
exports.LogEvent = LogEvent;
//# sourceMappingURL=event.entity.js.map