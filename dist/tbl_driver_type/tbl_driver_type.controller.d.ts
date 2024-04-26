import { TblDriverTypeService } from './tbl_driver_type.service';
import { CreateTblDriverTypeDto } from './dto/create-tbl_driver_type.dto';
import { UpdateTblDriverTypeDto } from './dto/update-tbl_driver_type.dto';
export declare class TblDriverTypeController {
    private readonly tblDriverTypeService;
    constructor(tblDriverTypeService: TblDriverTypeService);
    create(createTblDriverTypeDto: CreateTblDriverTypeDto): Promise<import("./entities/tbl_driver_type.entity").TblDriverType>;
    findAll(): Promise<import("./entities/tbl_driver_type.entity").TblDriverType[]>;
    findOne(id: string): Promise<import("./entities/tbl_driver_type.entity").TblDriverType>;
    update(id: string, updateTblDriverTypeDto: UpdateTblDriverTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
