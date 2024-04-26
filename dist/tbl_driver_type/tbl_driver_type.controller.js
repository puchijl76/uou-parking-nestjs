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
exports.TblDriverTypeController = void 0;
const common_1 = require("@nestjs/common");
const tbl_driver_type_service_1 = require("./tbl_driver_type.service");
const create_tbl_driver_type_dto_1 = require("./dto/create-tbl_driver_type.dto");
const update_tbl_driver_type_dto_1 = require("./dto/update-tbl_driver_type.dto");
const swagger_1 = require("@nestjs/swagger");
let TblDriverTypeController = class TblDriverTypeController {
    constructor(tblDriverTypeService) {
        this.tblDriverTypeService = tblDriverTypeService;
    }
    create(createTblDriverTypeDto) {
        return this.tblDriverTypeService.create(createTblDriverTypeDto);
    }
    findAll() {
        return this.tblDriverTypeService.findAll();
    }
    findOne(id) {
        return this.tblDriverTypeService.findOne(+id);
    }
    update(id, updateTblDriverTypeDto) {
        return this.tblDriverTypeService.update(+id, updateTblDriverTypeDto);
    }
    remove(id) {
        return this.tblDriverTypeService.remove(+id);
    }
};
exports.TblDriverTypeController = TblDriverTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tbl_driver_type_dto_1.CreateTblDriverTypeDto]),
    __metadata("design:returntype", void 0)
], TblDriverTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TblDriverTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TblDriverTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tbl_driver_type_dto_1.UpdateTblDriverTypeDto]),
    __metadata("design:returntype", void 0)
], TblDriverTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TblDriverTypeController.prototype, "remove", null);
exports.TblDriverTypeController = TblDriverTypeController = __decorate([
    (0, swagger_1.ApiTags)('TblDriverType'),
    (0, common_1.Controller)('tbl-driver-type'),
    __metadata("design:paramtypes", [tbl_driver_type_service_1.TblDriverTypeService])
], TblDriverTypeController);
//# sourceMappingURL=tbl_driver_type.controller.js.map