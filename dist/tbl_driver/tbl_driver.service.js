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
exports.TblDriverService = void 0;
const common_1 = require("@nestjs/common");
const tbl_driver_entity_1 = require("./entities/tbl_driver.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tbl_driver_type_entity_1 = require("../tbl_driver_type/entities/tbl_driver_type.entity");
let TblDriverService = class TblDriverService {
    constructor(TblDriverRepository, TblDriverTypeRepository) {
        this.TblDriverRepository = TblDriverRepository;
        this.TblDriverTypeRepository = TblDriverTypeRepository;
    }
    async create(createTblDriverDto) {
        const _driver = this.TblDriverRepository.create(createTblDriverDto);
        return await this.TblDriverRepository.save(_driver);
    }
    async findAll() {
        return await this.TblDriverRepository.find({
            relations: {
                _drivertype: true,
                _user: true,
            }
        });
    }
    async findOne(driver_id) {
        const _driver_id = await this.TblDriverRepository.findOneBy({ driver_id });
        if (!_driver_id) {
            throw new common_1.BadRequestException('Driver not found');
        }
        return _driver_id;
    }
    async update(driver_id, updateTblDriverDto) {
        await this.findOne(driver_id);
        return await this.TblDriverRepository.update(driver_id, updateTblDriverDto);
    }
    async remove(driver_id) {
        await this.findOne(driver_id);
        return await this.TblDriverRepository.delete({ driver_id });
    }
    async validateTblDriverType(_driver_type_id) {
        const _driver_typeEntity = await this.TblDriverTypeRepository.findOneBy({ driver_type_id: _driver_type_id });
        if (!_driver_typeEntity) {
            throw new common_1.BadRequestException('Driver Type not found');
        }
        return _driver_typeEntity;
    }
};
exports.TblDriverService = TblDriverService;
exports.TblDriverService = TblDriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tbl_driver_entity_1.TblDriver)),
    __param(1, (0, typeorm_1.InjectRepository)(tbl_driver_type_entity_1.TblDriverType)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TblDriverService);
//# sourceMappingURL=tbl_driver.service.js.map