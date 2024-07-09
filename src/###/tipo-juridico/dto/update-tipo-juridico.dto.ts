import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoJuridicoDto } from './create-tipo-juridico.dto';

export class UpdateTipoJuridicoDto extends PartialType(CreateTipoJuridicoDto) {}
