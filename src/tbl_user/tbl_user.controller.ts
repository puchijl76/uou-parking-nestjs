import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TblUserService } from './tbl_user.service';
import { CreateTblUserDto } from './dto/create-tbl_user.dto';
import { UpdateTblUserDto } from './dto/update-tbl_user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('TblUser')
@Controller('tbl-user')
export class TblUserController {
  constructor(private readonly tblUserService: TblUserService) {}

  @Post()
  create(@Body() createTblUserDto: CreateTblUserDto) {
    return this.tblUserService.create(createTblUserDto);
  }

  @Get()
  findAll() {
    return this.tblUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tblUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTblUserDto: UpdateTblUserDto) {
    return this.tblUserService.update(id, updateTblUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tblUserService.remove(id);
  }
}
