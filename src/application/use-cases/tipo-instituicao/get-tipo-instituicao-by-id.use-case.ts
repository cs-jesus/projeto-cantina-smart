import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";

export class GetTipoInstituicaoByIdUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}
  
    async execute(id: number): Promise<TipoInstituicao | null> {
      return this.tipoInstituicaoService.getTipoInstituicaoById(id);
    }
  }