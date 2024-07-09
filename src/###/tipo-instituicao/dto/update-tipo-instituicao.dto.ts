import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoInstituicaoDto } from './create-tipo-instituicao.dto';

export class UpdateTipoInstituicaoDto extends PartialType(CreateTipoInstituicaoDto) {}
