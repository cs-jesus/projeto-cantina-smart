import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/fisica.entity";
import { FisicaService } from "src/domain/services/fisica.service";

@Injectable()
export class FindFisicaByIdUseCase {
    // constructor(private readonly FisicaService: FisicaService) { }

    // async execute(id: number): Promise<Fisica | null> {
    //     return this.FisicaService.findFisicaById(+id);
    // }
}
