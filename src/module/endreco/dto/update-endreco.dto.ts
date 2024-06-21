import { PartialType } from '@nestjs/mapped-types';
import { CreateEndrecoDto } from './create-endreco.dto';

export class UpdateEndrecoDto extends PartialType(CreateEndrecoDto) {}
