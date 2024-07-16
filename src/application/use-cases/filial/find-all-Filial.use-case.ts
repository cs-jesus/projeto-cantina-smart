import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/Filial.entity";
import { FilialService } from "src/domain/services/Filial.service";

@Injectable()
export class FindAllFilial {
    constructor(private readonly FilialService: FilialService) { }

    async execute(): Promise<Filial[]> {
        return this.FilialService.findAllFilial();
    }
}
