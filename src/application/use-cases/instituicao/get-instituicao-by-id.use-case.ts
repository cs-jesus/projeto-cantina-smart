import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/service/instituicao.service";

export class GetInstituicaoByIdUseCase {
    constructor(private readonly instituicaoService: InstituicaoService) {}
  
    async execute(id: number): Promise<Instituicao | null> {
      return this.instituicaoService.getInstituicaoById(id);
    }
  }