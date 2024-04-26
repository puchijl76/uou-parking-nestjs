import { TblDriver } from "src/tbl_driver/entities/tbl_driver.entity";
export declare class TblUser {
    user_id: string;
    user_password: string;
    driver_id: number;
    _driver: TblDriver;
}
