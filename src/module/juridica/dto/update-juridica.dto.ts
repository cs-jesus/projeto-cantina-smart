import { PartialType } from '@nestjs/mapped-types';
import { CreateJuridicaDto } from './create-juridica.dto';

export class UpdateJuridicaDto extends PartialType(CreateJuridicaDto) {}
