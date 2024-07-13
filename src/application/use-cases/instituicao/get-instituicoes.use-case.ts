import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

export class GetInstituicoesUseCase {
  constructor(private readonly instituicaoService: InstituicaoService) { }

  async execute(): Promise<Instituicao[]> {
    return this.instituicaoService.getInstituicoes();
  }
}