import { TblUserService } from './tbl_user.service';
import { CreateTblUserDto } from './dto/create-tbl_user.dto';
import { UpdateTblUserDto } from './dto/update-tbl_user.dto';
export declare class TblUserController {
    private readonly tblUserService;
    constructor(tblUserService: TblUserService);
    create(createTblUserDto: CreateTblUserDto): Promise<import("./entities/tbl_user.entity").TblUser>;
    findAll(): Promise<import("./entities/tbl_user.entity").TblUser[]>;
    findOne(id: string): Promise<import("./entities/tbl_user.entity").TblUser>;
    update(id: string, updateTblUserDto: UpdateTblUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
