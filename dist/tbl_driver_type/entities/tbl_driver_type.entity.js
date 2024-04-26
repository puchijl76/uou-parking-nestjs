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
exports.TblDriverType = void 0;
const tbl_driver_entity_1 = require("../../tbl_driver/entities/tbl_driver.entity");
const typeorm_1 = require("typeorm");
let TblDriverType = class TblDriverType {
};
exports.TblDriverType = TblDriverType;
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_type_id', primary: true, unique: true, generated: true, nullable: false, type: 'integer' }),
    __metadata("design:type", Number)
], TblDriverType.prototype, "driver_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'driver_type_name', nullable: false, length: 30, type: 'varchar' }),
    __metadata("design:type", String)
], TblDriverType.prototype, "driver_type_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tbl_driver_entity_1.TblDriver, (_driver) => _driver._drivertype),
    __metadata("design:type", Array)
], TblDriverType.prototype, "_driver", void 0);
exports.TblDriverType = TblDriverType = __decorate([
    (0, typeorm_1.Entity)('tbl_driver_type')
], TblDriverType);
//# sourceMappingURL=tbl_driver_type.entity.js.map