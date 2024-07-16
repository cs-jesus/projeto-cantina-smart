import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/Estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";

@Injectable()
export class FindAllCidades {
    constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    async execute(): Promise<Estabelecimento[]> {
        return this.EstabelecimentoService.findAllEstabelecimentos();
    }
}
