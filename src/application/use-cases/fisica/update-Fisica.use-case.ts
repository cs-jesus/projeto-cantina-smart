import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/Fisica.entity";
import { FisicaService } from "src/domain/services/Fisica.service";

@Injectable()
export class UpdateFisicaUseCase {
    constructor(private readonly FisicaService: FisicaService) { }

    async execute(id: number, nome: string): Promise<Fisica> {
        return this.FisicaService.updateFisica(+id, nome);
    }
}
