import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/Estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";

@Injectable()
export class FindEstabelecimentoByNameUseCase {
    constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    async execute(nome: string): Promise<Estabelecimento | null> {
        return this.EstabelecimentoService.findEstabelecimentoByName(nome);
    }
}
