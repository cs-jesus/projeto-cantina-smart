import { Injectable } from "@nestjs/common";
import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroService } from "src/domain/services/bairro.service";

@Injectable()
export class FindBairroByNameUseCase {
    constructor(private readonly bairroService: BairroService) { }

    async execute(nome: string): Promise<Bairro | null> {
        return this.bairroService.findBairroByName(nome);
    }
}
