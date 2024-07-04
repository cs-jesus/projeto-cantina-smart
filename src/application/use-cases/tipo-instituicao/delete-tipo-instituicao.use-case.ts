import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";

export class DeleteTipoInstituicaoUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}
  
    async execute(id: number): Promise<void> {
      return this.tipoInstituicaoService.deleteTipoInstituicao(id);
    }
  }