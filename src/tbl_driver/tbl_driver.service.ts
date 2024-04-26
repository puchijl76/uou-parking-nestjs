import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTblDriverDto } from './dto/create-tbl_driver.dto';
import { UpdateTblDriverDto } from './dto/update-tbl_driver.dto';
import { TblDriver } from './entities/tbl_driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TblDriverType } from 'src/tbl_driver_type/entities/tbl_driver_type.entity';

@Injectable()
export class TblDriverService {

  constructor(
    @InjectRepository(TblDriver)
    private readonly TblDriverRepository: Repository<TblDriver>,

    @InjectRepository(TblDriverType)
    private readonly TblDriverTypeRepository: Repository<TblDriverType>,
  ) {}

  async create(createTblDriverDto: CreateTblDriverDto) {
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

  async findOne(driver_id: number) {
    const _driver_id = await this.TblDriverRepository.findOneBy({ driver_id }, );
    if (!_driver_id) {
      throw new BadRequestException('Driver not found');
    }
    return _driver_id;
  }

  async update(driver_id: number, updateTblDriverDto: UpdateTblDriverDto) {
    await this.findOne(driver_id);
    return await this.TblDriverRepository.update(driver_id, updateTblDriverDto);
  }

  async remove(driver_id: number) {
    await this.findOne(driver_id);
    return await this.TblDriverRepository.delete({ driver_id });
  }

  private async validateTblDriverType(_driver_type_id: number) {
    const _driver_typeEntity = await this.TblDriverTypeRepository.findOneBy({ driver_type_id: _driver_type_id });
  
    if (!_driver_typeEntity) {
      throw new BadRequestException('Driver Type not found');
    }
  
    return _driver_typeEntity;
  }

}
