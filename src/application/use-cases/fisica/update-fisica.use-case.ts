import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/fisica.entity";
import { FisicaService } from "src/domain/services/fisica.service";

@Injectable()
export class UpdateFisicaUseCase {
    // constructor(private readonly FisicaService: FisicaService) { }

    // async execute(id: number, nome: string): Promise<Fisica> {
    //     return this.FisicaService.updateFisica(+id, nome);
    // }
}
