import { Injectable } from "@nestjs/common";
import { Cidade } from "src/domain/entities/cidade.entity";
import { CidadeService } from "src/domain/services/cidade.service";

@Injectable()
export class FindCidadeByIdUseCase {
    constructor(private readonly cidadeService: CidadeService) { }

    async execute(id: number): Promise<Cidade | null> {
        return this.cidadeService.findCidadeById(+id);
    }
}
