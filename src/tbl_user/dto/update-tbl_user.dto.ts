import { PartialType } from '@nestjs/swagger';
import { CreateTblUserDto } from './create-tbl_user.dto';

export class UpdateTblUserDto extends PartialType(CreateTblUserDto) {}
