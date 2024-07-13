import { Injectable } from "@nestjs/common";
import { Cidade } from "src/domain/entities/cidade.entity";
import { CidadeService } from "src/domain/services/cidade.service";

@Injectable()
export class CreateCidadeUseCase {
    constructor(private readonly cidadeService: CidadeService) { }

    async execute(nome: string): Promise<Cidade> {
        return this.cidadeService.createCidade(nome);
    }
}
