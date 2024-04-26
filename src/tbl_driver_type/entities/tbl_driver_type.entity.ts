import { TblDriver } from "src/tbl_driver/entities/tbl_driver.entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

@Entity('tbl_driver_type')
export class TblDriverType {

    @Column({name: 'driver_type_id', primary: true, unique:true, generated: true, nullable:false, type: 'integer'})
    driver_type_id: number;

    @Column({name: 'driver_type_name', nullable:false, length: 30, type: 'varchar'})
    driver_type_name: string;

    @OneToMany(() => TblDriver, (_driver) => _driver._drivertype)
    _driver: TblDriver[];

}