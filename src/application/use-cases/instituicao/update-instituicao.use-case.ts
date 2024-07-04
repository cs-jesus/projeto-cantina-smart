import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/service/instituicao.service";

export class UpdateInstituicaoUseCase {
    constructor(private readonly instituicaoService: InstituicaoService) {}
  
    async execute(id: number, nome: string, sigla: string, tipoInstituicaoId: number): Promise<Instituicao> {
      return this.instituicaoService.updateInstituicao(id, nome, sigla, tipoInstituicaoId);
    }
  }