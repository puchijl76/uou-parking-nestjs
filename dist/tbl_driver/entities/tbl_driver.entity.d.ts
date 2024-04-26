import { TblDriverType } from "src/tbl_driver_type/entities/tbl_driver_type.entity";
import { TblUser } from "src/tbl_user/entities/tbl_user.entity";
export declare class TblDriver {
    driver_id: number;
    driver_name: string;
    driver_lastname: string;
    driver_address: string;
    driver_email: string;
    driver_type_id: number;
    _drivertype: TblDriverType;
    _user: TblUser;
}
