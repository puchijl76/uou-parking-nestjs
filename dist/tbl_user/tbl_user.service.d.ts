import { CreateTblUserDto } from './dto/create-tbl_user.dto';
import { UpdateTblUserDto } from './dto/update-tbl_user.dto';
import { TblUser } from './entities/tbl_user.entity';
import { Repository } from 'typeorm';
export declare class TblUserService {
    private readonly TblUserRepository;
    constructor(TblUserRepository: Repository<TblUser>);
    create(createTblUserDto: CreateTblUserDto): Promise<TblUser>;
    findAll(): Promise<TblUser[]>;
    findOne(user_id: string): Promise<TblUser>;
    update(user_id: string, updateTblUserDto: UpdateTblUserDto): Promise<import("typeorm").UpdateResult>;
    remove(user_id: string): Promise<import("typeorm").DeleteResult>;
}
