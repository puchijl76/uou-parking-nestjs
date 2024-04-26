import { Module } from '@nestjs/common';
import { TblUserService } from './tbl_user.service';
import { TblUserController } from './tbl_user.controller';
import { TblUser } from './entities/tbl_user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TblUser])],
  controllers: [TblUserController],
  providers: [TblUserService],
  exports: [TypeOrmModule],
})
export class TblUserModule {}
