import { Injectable } from "@nestjs/common";
import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

@Injectable()
export class UpdateInstituicaoUseCase {
    constructor(private readonly instituicaoService: InstituicaoService) { }

    async execute(id: number, tipoInstituicaoId: number, nome: string, sigla: string): Promise<Instituicao> {
        return this.instituicaoService.updateInstituicao(+id, tipoInstituicaoId, nome, sigla);
    }
}
