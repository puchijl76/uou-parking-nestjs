import { CreateTblDriverDto } from './dto/create-tbl_driver.dto';
import { UpdateTblDriverDto } from './dto/update-tbl_driver.dto';
import { TblDriver } from './entities/tbl_driver.entity';
import { Repository } from 'typeorm';
import { TblDriverType } from 'src/tbl_driver_type/entities/tbl_driver_type.entity';
export declare class TblDriverService {
    private readonly TblDriverRepository;
    private readonly TblDriverTypeRepository;
    constructor(TblDriverRepository: Repository<TblDriver>, TblDriverTypeRepository: Repository<TblDriverType>);
    create(createTblDriverDto: CreateTblDriverDto): Promise<TblDriver>;
    findAll(): Promise<TblDriver[]>;
    findOne(driver_id: number): Promise<TblDriver>;
    update(driver_id: number, updateTblDriverDto: UpdateTblDriverDto): Promise<import("typeorm").UpdateResult>;
    remove(driver_id: number): Promise<import("typeorm").DeleteResult>;
    private validateTblDriverType;
}
