import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsEmail, IsNotEmpty, MaxLength, IsOptional, IsUppercase, IsDateString, IsStrongPassword } from 'class-validator';
import { join } from "path";
import { TblDriverType } from "src/tbl_driver_type/entities/tbl_driver_type.entity";
import { TblDriver } from "src/tbl_driver/entities/tbl_driver.entity";

@Entity('tbl_user')
export class TblUser {

    @Column({name: 'user_id', primary: true, unique:true, nullable:false, length: 30, type: 'varchar'})
    user_id: string;

    @Column({name: 'user_password', nullable:false, length: 256, type: 'varchar'})
//    @IsStrongPassword()
    user_password: string;

    @Column({name: 'driver_id', unique:true, nullable:false, type: 'integer'})
    driver_id: number;

    @OneToOne(()=> TblDriver, (_driver) => _driver._user)
    @JoinColumn({name: 'driver_id'})
    _driver: TblDriver;


}