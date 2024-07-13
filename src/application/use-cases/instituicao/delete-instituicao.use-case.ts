import { InstituicaoService } from "src/domain/services/instituicao.service";


export class DeleteInstituicaoUseCase {
  constructor(private readonly instituicaoService: InstituicaoService) { }

  async execute(id: number): Promise<void> {
    return this.instituicaoService.deleteInstituicao(id);
  }
}