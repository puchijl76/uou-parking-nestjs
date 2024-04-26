import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTblUserDto {
    @IsString()
    @MinLength(3)
    user_id: string;

    @IsString()
    @MinLength(256)
    user_password: string;

    @IsNumber()
    driver_id: number;
}