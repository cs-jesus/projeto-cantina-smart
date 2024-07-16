import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/Estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";

@Injectable()
export class UpdateEstabelecimentoUseCase {
    constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    async execute(id: number, nome: string): Promise<Estabelecimento> {
        return this.EstabelecimentoService.updateEstabelecimento(+id, nome);
    }
}
