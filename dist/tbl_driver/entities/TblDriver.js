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
exports.TblDriver = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const tbl_driver_type_entity_1 = require("../../tbl_driver_type/entities/tbl_driver_type.entity");
const tbl_user_entity_1 = require("../../tbl_user/entities/tbl_user.entity");
let TblDriver = class TblDriver {
};
exports.TblDriver = TblDriver;
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_id', primary: true, unique: true, generated: true, nullable: false, type: 'integer' }),
    __metadata("design:type", Number)
], TblDriver.prototype, "driver_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_name', nullable: false, length: 30, type: 'varchar' }),
    __metadata("design:type", String)
], TblDriver.prototype, "driver_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_lastname', nullable: false, length: 30, type: 'varchar' }),
    __metadata("design:type", String)
], TblDriver.prototype, "driver_lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_address', nullable: false, length: 50, type: 'varchar' }),
    __metadata("design:type", String)
], TblDriver.prototype, "driver_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_email', unique: true, nullable: false, length: 30, type: 'varchar' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], TblDriver.prototype, "driver_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_type_id', nullable: false, type: 'smallint' }),
    __metadata("design:type", Number)
], TblDriver.prototype, "driver_type_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tbl_driver_type_entity_1.TblDriverType, (_drivertype) => _drivertype._driver),
    (0, typeorm_1.JoinColumn)({ name: 'driver_type_id' }),
    __metadata("design:type", tbl_driver_type_entity_1.TblDriverType)
], TblDriver.prototype, "_drivertype", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tbl_user_entity_1.TblUser, (_user) => _user._driver),
    __metadata("design:type", tbl_user_entity_1.TblUser)
], TblDriver.prototype, "_user", void 0);
exports.TblDriver = TblDriver = __decorate([
    (0, typeorm_1.Entity)('tbl_driver')
], TblDriver);
//# sourceMappingURL=TblDriver.js.map