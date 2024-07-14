import { Injectable } from "@nestjs/common";
import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroService } from "src/domain/services/bairro.service";

@Injectable()
export class FindAllBairros {
    constructor(private readonly bairroService: BairroService) { }

    async execute(): Promise<Bairro[]> {
        return this.bairroService.findAllBairros();
    }
}
