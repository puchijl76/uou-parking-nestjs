import { IsString, MinLength } from 'class-validator';

export class CreateTblDriverTypeDto {
  @IsString()
  @MinLength(3)
  driver_type_name: string;
}