"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblUserModule = void 0;
const common_1 = require("@nestjs/common");
const tbl_user_service_1 = require("./tbl_user.service");
const tbl_user_controller_1 = require("./tbl_user.controller");
const tbl_user_entity_1 = require("./entities/tbl_user.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TblUserModule = class TblUserModule {
};
exports.TblUserModule = TblUserModule;
exports.TblUserModule = TblUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tbl_user_entity_1.TblUser])],
        controllers: [tbl_user_controller_1.TblUserController],
        providers: [tbl_user_service_1.TblUserService],
        exports: [typeorm_1.TypeOrmModule],
    })
], TblUserModule);
//# sourceMappingURL=tbl_user.module.js.map