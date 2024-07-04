import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";

export class GetTipoInstituicoesUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}
  
    async execute(): Promise<TipoInstituicao[]> {
      return this.tipoInstituicaoService.getTipoInstituicoes();
    }
  }