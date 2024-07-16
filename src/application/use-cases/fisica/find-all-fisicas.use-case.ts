import { Injectable } from "@nestjs/common";
import { Fisica } from "src/domain/entities/fisica.entity";
import { FisicaService } from "src/domain/services/fisica.service";

@Injectable()
export class FindAllFisicas {
    // constructor(private readonly FisicaService: FisicaService) { }

    // async execute(): Promise<Fisica[]> {
    //     return this.FisicaService.findAllFisica();
    // }
}
