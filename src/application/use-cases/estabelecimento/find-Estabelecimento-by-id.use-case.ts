import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/Estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";

@Injectable()
export class FindEstabelecimentoByIdUseCase {
    constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    async execute(id: number): Promise<Estabelecimento | null> {
        return this.EstabelecimentoService.findEstabelecimentoById(+id);
    }
}
