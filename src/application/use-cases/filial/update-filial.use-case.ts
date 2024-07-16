import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/filial.entity";
import { FilialService } from "src/domain/services/filial.service";

@Injectable()
export class UpdateFilialUseCase {
    // constructor(private readonly FilialService: FilialService) { }

    // async execute(id: number, nome: string): Promise<Filial> {
    //     return this.FilialService.updateFilial(+id, nome);
    // }
}
