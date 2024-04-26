import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsEmail, IsNotEmpty, MaxLength, IsOptional, IsUppercase, IsDateString } from 'class-validator';
import { TblDriverType } from "src/tbl_driver_type/entities/tbl_driver_type.entity";
import { TblUser } from "src/tbl_user/entities/tbl_user.entity";

@Entity('tbl_driver')
export class TblDriver {

  @Column({name: 'driver_id', primary: true, unique:true, generated: true, nullable:false, type: 'integer'})
    driver_id: number;

    @Column({name: 'driver_name', nullable:false, length: 30, type: 'varchar'})
    driver_name: string;

    @Column({name: 'driver_lastname', nullable:false, length: 30, type: 'varchar'})
    driver_lastname: string;

    @Column({name: 'driver_address', nullable:false, length: 50, type: 'varchar'})
    driver_address: string;

    @Column({name: 'driver_email', unique:true, nullable:false, length: 30,  type: 'varchar'})
    @IsEmail()
    driver_email: string;

    @Column({name: 'driver_type_id', nullable:false, type: 'smallint'})
    driver_type_id: number;

    @ManyToOne(()=> TblDriverType, (_drivertype)=> _drivertype._driver)
    @JoinColumn({name: 'driver_type_id'})
    _drivertype: TblDriverType;

    @OneToOne(()=> TblUser, (_user) => _user._driver)
    _user: TblUser;

}
