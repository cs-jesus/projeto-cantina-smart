import { IsString } from 'class-validator';
import { UnidadeMedida } from '../entities/unidade-medida.entity';

export class CreateUnidadeMedidaDto extends UnidadeMedida {
  
  @IsString()
  nome: string;

  @IsString()
  sigla: string;
}
