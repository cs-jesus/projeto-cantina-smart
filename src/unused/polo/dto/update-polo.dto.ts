import { PartialType } from '@nestjs/mapped-types';
import { CreatePoloDto } from './create-polo.dto';

export class UpdatePoloDto extends PartialType(CreatePoloDto) {}
