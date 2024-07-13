import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

export class ValidateInstituicaoNameUseCase {
  constructor(private readonly instituicaoService: InstituicaoService) { }

  async execute(nome: string): Promise<boolean> {
    return this.instituicaoService.validateNome(nome);
  }
}