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
exports.TblDriverTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tbl_driver_type_entity_1 = require("./entities/tbl_driver_type.entity");
let TblDriverTypeService = class TblDriverTypeService {
    constructor(TblDriverTypeRepository) {
        this.TblDriverTypeRepository = TblDriverTypeRepository;
    }
    async create(createTblDriverTypeDto) {
        const _driver_type = this.TblDriverTypeRepository.create(createTblDriverTypeDto);
        return await this.TblDriverTypeRepository.save(_driver_type);
    }
    async findAll() {
        return await this.TblDriverTypeRepository.find({
            relations: {
                _driver: true,
            }
        });
    }
    async findOne(driver_type_id) {
        const _driver_type_id = await this.TblDriverTypeRepository.findOneBy({ driver_type_id });
        if (!_driver_type_id) {
            throw new common_1.BadRequestException('Driver Type not found');
        }
        return _driver_type_id;
    }
    async update(driver_type_id, updateTblDriverTypeDto) {
        await this.findOne(driver_type_id);
        return await this.TblDriverTypeRepository.update(driver_type_id, updateTblDriverTypeDto);
    }
    async remove(driver_type_id) {
        await this.findOne(driver_type_id);
        return await this.TblDriverTypeRepository.delete({ driver_type_id });
    }
};
exports.TblDriverTypeService = TblDriverTypeService;
exports.TblDriverTypeService = TblDriverTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tbl_driver_type_entity_1.TblDriverType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TblDriverTypeService);
//# sourceMappingURL=tbl_driver_type.service.js.map