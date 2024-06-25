import { UnidadeMedida } from '../entities/unidade-medida.entity';

export class CreateUnidadeMedidaDto extends UnidadeMedida {
  nome: string;
  sigla: string;
}
