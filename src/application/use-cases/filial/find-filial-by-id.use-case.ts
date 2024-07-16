import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/filial.entity";
import { FilialService } from "src/domain/services/filial.service";

@Injectable()
export class FindFilialByIdUseCase {
    // constructor(private readonly FilialService: FilialService) { }

    // async execute(id: number): Promise<Filial | null> {
    //     return this.FilialService.findFilialById(+id);
    // }
}
