import { Injectable } from "@nestjs/common";
import { CidadeService } from "src/domain/services/cidade.service";

@Injectable()
export class DeleteCidadeUseCase {
    constructor(private readonly cidadeService: CidadeService) { }

    async execute(id: number): Promise<void> {
        return this.cidadeService.deleteCidade(+id);
    }
}
