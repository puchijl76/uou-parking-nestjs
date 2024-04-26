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
exports.TblUser = void 0;
const typeorm_1 = require("typeorm");
const tbl_driver_entity_1 = require("../../tbl_driver/entities/tbl_driver.entity");
let TblUser = class TblUser {
};
exports.TblUser = TblUser;
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', primary: true, unique: true, nullable: false, length: 30, type: 'varchar' }),
    __metadata("design:type", String)
], TblUser.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_password', nullable: false, length: 256, type: 'varchar' }),
    __metadata("design:type", String)
], TblUser.prototype, "user_password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_id', unique: true, nullable: false, type: 'integer' }),
    __metadata("design:type", Number)
], TblUser.prototype, "driver_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tbl_driver_entity_1.TblDriver, (_driver) => _driver._user),
    (0, typeorm_1.JoinColumn)({ name: 'driver_id' }),
    __metadata("design:type", tbl_driver_entity_1.TblDriver)
], TblUser.prototype, "_driver", void 0);
exports.TblUser = TblUser = __decorate([
    (0, typeorm_1.Entity)('tbl_user')
], TblUser);
//# sourceMappingURL=tbl_user.entity.js.map