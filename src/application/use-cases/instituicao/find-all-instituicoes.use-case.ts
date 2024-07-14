import { Injectable } from "@nestjs/common";
import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

@Injectable()
export class FindAllInstituicoesUseCase {
    constructor(private readonly InstituicaoService: InstituicaoService) { }

    async execute(): Promise<Instituicao[]> {
        return this.InstituicaoService.findAllInstituicoes();
    }
}
