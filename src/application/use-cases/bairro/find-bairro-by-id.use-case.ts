import { Injectable } from "@nestjs/common";
import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroService } from "src/domain/service/bairro.service";

@Injectable()
export class FindBairroByIdUseCase {
    constructor(private readonly bairroService: BairroService) { }

    async execute(id: number): Promise<Bairro | null> {
        return this.bairroService.findBairroById(+id);
    }
}
