import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/Filial.entity";
import { FilialService } from "src/domain/services/Filial.service";

@Injectable()
export class FindEstabelecimentoByNameUseCase {
    constructor(private readonly FilialService: FilialService) { }

    async execute(nome: string): Promise<Filial | null> {
        return this.FilialService.findFilialByName(nome);
    }
}
