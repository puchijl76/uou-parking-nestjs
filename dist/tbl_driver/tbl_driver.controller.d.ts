import { TblDriverService } from './tbl_driver.service';
import { CreateTblDriverDto } from './dto/create-tbl_driver.dto';
import { UpdateTblDriverDto } from './dto/update-tbl_driver.dto';
export declare class TblDriverController {
    private readonly tblDriverService;
    constructor(tblDriverService: TblDriverService);
    create(createTblDriverDto: CreateTblDriverDto): Promise<import("./entities/tbl_driver.entity").TblDriver>;
    findAll(): Promise<import("./entities/tbl_driver.entity").TblDriver[]>;
    findOne(id: string): Promise<import("./entities/tbl_driver.entity").TblDriver>;
    update(id: string, updateTblDriverDto: UpdateTblDriverDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
