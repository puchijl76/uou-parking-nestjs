import { Repository } from 'typeorm';
import { CreateTblDriverTypeDto } from './dto/create-tbl_driver_type.dto';
import { UpdateTblDriverTypeDto } from './dto/update-tbl_driver_type.dto';
import { TblDriverType } from './entities/tbl_driver_type.entity';
export declare class TblDriverTypeService {
    private readonly TblDriverTypeRepository;
    constructor(TblDriverTypeRepository: Repository<TblDriverType>);
    create(createTblDriverTypeDto: CreateTblDriverTypeDto): Promise<TblDriverType>;
    findAll(): Promise<TblDriverType[]>;
    findOne(driver_type_id: number): Promise<TblDriverType>;
    update(driver_type_id: number, updateTblDriverTypeDto: UpdateTblDriverTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(driver_type_id: number): Promise<import("typeorm").DeleteResult>;
}
