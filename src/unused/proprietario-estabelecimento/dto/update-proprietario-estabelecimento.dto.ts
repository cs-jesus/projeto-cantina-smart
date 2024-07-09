import { PartialType } from '@nestjs/mapped-types';
import { CreateProprietarioEstabelecimentoDto } from './create-proprietario-estabelecimento.dto';

export class UpdateProprietarioEstabelecimentoDto extends PartialType(CreateProprietarioEstabelecimentoDto) {}
