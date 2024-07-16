import { Injectable } from "@nestjs/common";
import { Filial } from "src/domain/entities/filial.entity";
import { FilialService } from "src/domain/services/filial.service";

@Injectable()
export class FindAllFiliais {
    // constructor(private readonly FilialService: FilialService) { }

    // async execute(): Promise<Filial[]> {
    //     return this.FilialService.findAllFiliais();
    // }
}
