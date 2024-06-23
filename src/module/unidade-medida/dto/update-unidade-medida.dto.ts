import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadeMedidaDto } from './create-unidade-medida.dto';

export class UpdateUnidadeMedidaDto extends PartialType(CreateUnidadeMedidaDto) {}
