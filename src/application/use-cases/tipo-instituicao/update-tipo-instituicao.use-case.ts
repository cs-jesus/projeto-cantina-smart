import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";


export class UpdateTipoInstituicaoUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}
  
    async execute(id: number, descricao: string): Promise<TipoInstituicao> {
      return this.tipoInstituicaoService.updateTipoInstituicao(id, descricao);
    }
  }