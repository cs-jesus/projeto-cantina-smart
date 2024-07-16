import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/Fisica.entity";
import { FisicaService } from "src/domain/services/Fisica.service";

@Injectable()
export class FindAllFisica {
    constructor(private readonly FisicaService: FisicaService) { }

    async execute(): Promise<Fisica[]> {
        return this.FisicaService.findAllFisica();
    }
}
