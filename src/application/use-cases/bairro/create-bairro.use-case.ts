import { Injectable } from "@nestjs/common";
import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroService } from "src/domain/service/bairro.service";

@Injectable()
export class CreateBairroUseCase {
    constructor(private readonly bairroService: BairroService) { }

    async execute(nome: string): Promise<Bairro> {
        return this.bairroService.createBairro(nome);
    }
}
