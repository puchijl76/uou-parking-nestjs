import { PartialType } from '@nestjs/swagger';
import { CreateTblDriverTypeDto } from './create-tbl_driver_type.dto';

export class UpdateTblDriverTypeDto extends PartialType(CreateTblDriverTypeDto) {}
