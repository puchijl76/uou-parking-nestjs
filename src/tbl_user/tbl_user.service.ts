import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTblUserDto } from './dto/create-tbl_user.dto';
import { UpdateTblUserDto } from './dto/update-tbl_user.dto';
import { TblUser } from './entities/tbl_user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TblUserService {
  constructor(
    @InjectRepository(TblUser)
    private readonly TblUserRepository: Repository<TblUser>,
  ) {}

  async create(createTblUserDto: CreateTblUserDto) {
    const _user = this.TblUserRepository.create(createTblUserDto);
    return await this.TblUserRepository.save(_user);
  }

/*
  async findAll() {
    return await this.TblUserRepository.find();
  }
*/
  async findAll() {
    return await this.TblUserRepository.find({
      relations: {
        _driver: true,
      }
    });
  }

  async findOne(user_id: string) {
    const _user_id = await this.TblUserRepository.findOneBy({ user_id });
    if (!_user_id) {
      throw new BadRequestException('User not found');
    }
    return _user_id;
  }

  async update(user_id: string, updateTblUserDto: UpdateTblUserDto) {
    await this.findOne(user_id);
    return await this.TblUserRepository.update(user_id, updateTblUserDto);
  }

  async remove(user_id: string) {
    await this.findOne(user_id);
    return await this.TblUserRepository.delete({ user_id });
  }
}
