import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEstabelecimentoDto } from './create-tipo-estabelecimento.dto';

export class UpdateTipoEstabelecimentoDto extends PartialType(CreateTipoEstabelecimentoDto) {}
