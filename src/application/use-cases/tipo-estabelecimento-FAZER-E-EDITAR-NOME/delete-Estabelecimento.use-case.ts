import { Injectable } from "@nestjs/common";
import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";

@Injectable()
export class DeleteEstabelecimentoUseCase {
    constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    async execute(id: number): Promise<void> {
        return this.EstabelecimentoService.deleteEstabelecimento(+id);
    }
}
