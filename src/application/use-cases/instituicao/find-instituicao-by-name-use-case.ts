import { Injectable } from "@nestjs/common";
import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

@Injectable()
export class FindInstituicaoByNameUseCase {
    constructor(private readonly InstituicaoService: InstituicaoService) { }

    async execute(nome: string): Promise<Instituicao | null> {
        return this.InstituicaoService.findInstituicaoByName(nome);
    }
}
