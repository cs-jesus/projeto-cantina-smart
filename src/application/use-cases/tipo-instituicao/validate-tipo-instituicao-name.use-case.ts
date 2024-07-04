import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";

export class ValidateTipoInstituicaoNameUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}
  
    async execute(descricao: string): Promise<boolean> {
      return this.tipoInstituicaoService.validateDescricao(descricao);
    }
  }