import { Module } from '@nestjs/common';
import { TblDriverTypeService } from './tbl_driver_type.service';
import { TblDriverTypeController } from './tbl_driver_type.controller';
import { TblDriverType } from './entities/tbl_driver_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TblDriverType])],
  controllers: [TblDriverTypeController],
  providers: [TblDriverTypeService],
  exports: [TypeOrmModule],
})
export class TblDriverTypeModule {}