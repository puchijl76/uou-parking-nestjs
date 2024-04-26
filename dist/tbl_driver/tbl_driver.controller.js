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
exports.TblDriverController = void 0;
const common_1 = require("@nestjs/common");
const tbl_driver_service_1 = require("./tbl_driver.service");
const create_tbl_driver_dto_1 = require("./dto/create-tbl_driver.dto");
const update_tbl_driver_dto_1 = require("./dto/update-tbl_driver.dto");
const swagger_1 = require("@nestjs/swagger");
let TblDriverController = class TblDriverController {
    constructor(tblDriverService) {
        this.tblDriverService = tblDriverService;
    }
    create(createTblDriverDto) {
        return this.tblDriverService.create(createTblDriverDto);
    }
    findAll() {
        return this.tblDriverService.findAll();
    }
    findOne(id) {
        return this.tblDriverService.findOne(+id);
    }
    update(id, updateTblDriverDto) {
        return this.tblDriverService.update(+id, updateTblDriverDto);
    }
    remove(id) {
        return this.tblDriverService.remove(+id);
    }
};
exports.TblDriverController = TblDriverController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tbl_driver_dto_1.CreateTblDriverDto]),
    __metadata("design:returntype", void 0)
], TblDriverController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TblDriverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TblDriverController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tbl_driver_dto_1.UpdateTblDriverDto]),
    __metadata("design:returntype", void 0)
], TblDriverController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TblDriverController.prototype, "remove", null);
exports.TblDriverController = TblDriverController = __decorate([
    (0, swagger_1.ApiTags)('TblDriver'),
    (0, common_1.Controller)('tbl-driver'),
    __metadata("design:paramtypes", [tbl_driver_service_1.TblDriverService])
], TblDriverController);
//# sourceMappingURL=tbl_driver.controller.js.map