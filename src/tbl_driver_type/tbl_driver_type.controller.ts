import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TblDriverTypeService } from './tbl_driver_type.service';
import { CreateTblDriverTypeDto } from './dto/create-tbl_driver_type.dto';
import { UpdateTblDriverTypeDto } from './dto/update-tbl_driver_type.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('TblDriverType')
@Controller('tbl-driver-type')
export class TblDriverTypeController {
  constructor(private readonly tblDriverTypeService: TblDriverTypeService) {}

  @Post()
  create(@Body() createTblDriverTypeDto: CreateTblDriverTypeDto) {
    return this.tblDriverTypeService.create(createTblDriverTypeDto);
  }

  @Get()
  findAll() {
    return this.tblDriverTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tblDriverTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTblDriverTypeDto: UpdateTblDriverTypeDto) {
    return this.tblDriverTypeService.update(+id, updateTblDriverTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tblDriverTypeService.remove(+id);
  }
}
