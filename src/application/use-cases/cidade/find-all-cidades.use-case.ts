import { Injectable } from "@nestjs/common";
import { Cidade } from "src/domain/entities/cidade.entity";
import { CidadeService } from "src/domain/services/cidade.service";

@Injectable()
export class FindAllCidades {
    constructor(private readonly cidadeService: CidadeService) { }

    async execute(): Promise<Cidade[]> {
        return this.cidadeService.findAllCidades();
    }
}
