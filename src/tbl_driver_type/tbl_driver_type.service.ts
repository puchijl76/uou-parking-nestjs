import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTblDriverTypeDto } from './dto/create-tbl_driver_type.dto';
import { UpdateTblDriverTypeDto } from './dto/update-tbl_driver_type.dto';
import { TblDriverType } from './entities/tbl_driver_type.entity';

@Injectable()
export class TblDriverTypeService {

  constructor(
    @InjectRepository(TblDriverType)
    private readonly TblDriverTypeRepository: Repository<TblDriverType>,
  ) {}

  async create(createTblDriverTypeDto: CreateTblDriverTypeDto) {
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

  async findOne(driver_type_id: number) {
    const _driver_type_id = await this.TblDriverTypeRepository.findOneBy({ driver_type_id });
    if (!_driver_type_id) {
      throw new BadRequestException('Driver Type not found');
    }
    return _driver_type_id;
  }

  async update(driver_type_id: number, updateTblDriverTypeDto: UpdateTblDriverTypeDto) {
    await this.findOne(driver_type_id);
    return await this.TblDriverTypeRepository.update(driver_type_id, updateTblDriverTypeDto);
  }

  async remove(driver_type_id: number) {
    await this.findOne(driver_type_id);
    return await this.TblDriverTypeRepository.delete({ driver_type_id });
  }
}
