import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/Filial.entity";
import { FilialService } from "src/domain/services/Filial.service";

@Injectable()
export class CreateFilialUseCase {
    constructor(private readonly FilialService: FilialService) { }

    async execute(nome: string): Promise<Filial> {
        return this.FilialService.createCidade(nome);
    }
}
