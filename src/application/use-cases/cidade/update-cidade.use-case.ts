import { Injectable } from "@nestjs/common";
import { Cidade } from "src/domain/entities/cidade.entity";
import { CidadeService } from "src/domain/services/cidade.service";

@Injectable()
export class UpdateCidadeUseCase {
    constructor(private readonly cidadeService: CidadeService) { }

    async execute(id: number, nome: string): Promise<Cidade> {
        return this.cidadeService.updateCidade(+id, nome);
    }
}
