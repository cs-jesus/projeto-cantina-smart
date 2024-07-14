import { PartialType } from '@nestjs/mapped-types';
import { CreateFisicaDto } from './create-fisica.dto';

export class UpdateFisicaDto extends PartialType(CreateFisicaDto) {}
