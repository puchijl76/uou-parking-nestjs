import { Module } from '@nestjs/common';
import { TblDriverService } from './tbl_driver.service';
import { TblDriverController } from './tbl_driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TblDriver } from './entities/tbl_driver.entity';
import { TblDriverTypeModule } from 'src/tbl_driver_type/tbl_driver_type.module';
import { TblDriverTypeService } from 'src/tbl_driver_type/tbl_driver_type.service';

@Module({
  imports: [TypeOrmModule.forFeature([TblDriver]), TblDriverTypeModule],
  controllers: [TblDriverController],
  providers: [TblDriverService, TblDriverTypeService],
  exports: [TypeOrmModule],
})
export class TblDriverModule {}
