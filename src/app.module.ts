import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TblDriverModule } from './tbl_driver/tbl_driver.module';
import { TblDriverTypeModule } from './tbl_driver_type/tbl_driver_type.module';
import { TblUserModule } from './tbl_user/tbl_user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      password: 'postgres',
      username: 'postgres',
      database: 'db_uou_2024',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TblDriverModule,
    TblDriverTypeModule,
    TblUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
