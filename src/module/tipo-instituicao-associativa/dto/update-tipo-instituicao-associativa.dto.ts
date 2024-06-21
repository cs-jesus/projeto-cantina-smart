import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoInstituicaoAssociativaDto } from './create-tipo-instituicao-associativa.dto';

export class UpdateTipoInstituicaoAssociativaDto extends PartialType(CreateTipoInstituicaoAssociativaDto) {}
