import { PartialType } from '@nestjs/mapped-types';
import { CreateTblDriverDto } from './create-tbl_driver.dto';

export class UpdateTblDriverDto extends PartialType(CreateTblDriverDto) {}
