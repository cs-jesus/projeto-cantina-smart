import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/filial.entity";
import { FilialService } from "src/domain/services/filial.service";

@Injectable()
export class FindEstabelecimentoByNameUseCase {
    // constructor(private readonly FilialService: FilialService) { }

    // async execute(nome: string): Promise<Filial | null> {
    //     return this.FilialService.findFilialByName(nome);
    // }
}
