import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituicaoTipoInstituicaoDto } from './create-instituicao-tipo-instituicao.dto';

export class UpdateInstituicaoTipoInstituicaoDto extends PartialType(CreateInstituicaoTipoInstituicaoDto) {}
