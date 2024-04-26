"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblDriverModule = void 0;
const common_1 = require("@nestjs/common");
const tbl_driver_service_1 = require("./tbl_driver.service");
const tbl_driver_controller_1 = require("./tbl_driver.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tbl_driver_entity_1 = require("./entities/tbl_driver.entity");
const tbl_driver_type_module_1 = require("../tbl_driver_type/tbl_driver_type.module");
const tbl_driver_type_service_1 = require("../tbl_driver_type/tbl_driver_type.service");
let TblDriverModule = class TblDriverModule {
};
exports.TblDriverModule = TblDriverModule;
exports.TblDriverModule = TblDriverModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tbl_driver_entity_1.TblDriver]), tbl_driver_type_module_1.TblDriverTypeModule],
        controllers: [tbl_driver_controller_1.TblDriverController],
        providers: [tbl_driver_service_1.TblDriverService, tbl_driver_type_service_1.TblDriverTypeService],
        exports: [typeorm_1.TypeOrmModule],
    })
], TblDriverModule);
//# sourceMappingURL=tbl_driver.module.js.map