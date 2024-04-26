import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TblDriverService } from './tbl_driver.service';
import { CreateTblDriverDto } from './dto/create-tbl_driver.dto';
import { UpdateTblDriverDto } from './dto/update-tbl_driver.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('TblDriver')
@Controller('tbl-driver')
export class TblDriverController {
  constructor(private readonly tblDriverService: TblDriverService) {}

  @Post()
  create(@Body() createTblDriverDto: CreateTblDriverDto) {
    return this.tblDriverService.create(createTblDriverDto);
  }

  @Get()
  findAll() {
    return this.tblDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tblDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTblDriverDto: UpdateTblDriverDto) {
    return this.tblDriverService.update(+id, updateTblDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tblDriverService.remove(+id);
  }
}
