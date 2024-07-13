import { Injectable } from "@nestjs/common";
import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroService } from "src/domain/service/bairro.service";

@Injectable()
export class UpdateBairroUseCase {
    constructor(private readonly bairroService: BairroService) { }

    async execute(id: number, nome: string): Promise<Bairro> {
        return this.bairroService.updateBairro(+id, nome);
    }
}
