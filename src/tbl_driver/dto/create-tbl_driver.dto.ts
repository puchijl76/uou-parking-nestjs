import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTblDriverDto {
  @IsString()
  @MinLength(3)
  driver_name: string;

  @IsString()
  @MinLength(3)
  driver_lastname: string;

  @IsString()
  @MinLength(3)
  driver_address: string;

  @MinLength(3)
  @IsEmail()
  driver_email: string;

  @IsNumber()
  driver_type_id: number;
}