import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/fisica.entity";
import { FisicaService } from "src/domain/services/fisica.service";

@Injectable()
export class FindFisicaByCPFUseCase {
    // constructor(private readonly FisicaService: FisicaService) { }

    // async execute(nome: string): Promise<Fisica | null> {
    //     return this.FisicaService.findFisicaByName(nome);
    // }
}
