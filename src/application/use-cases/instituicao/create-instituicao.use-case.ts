import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/service/instituicao.service";

export class CreateInstituicaoUseCase {
  constructor(private readonly instituicaoService: InstituicaoService) {}

  async execute(nome: string, sigla: string, tipoInstituicaoId: number): Promise<Instituicao> {
    return this.instituicaoService.createInstituicao(nome, sigla, tipoInstituicaoId);
  }
}
