import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/estabelecimento.service";

@Injectable()
export class FindAllCidades { // ??????
    // constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    // async execute(): Promise<Estabelecimento[]> {
    //     return this.EstabelecimentoService.findAllEstabelecimentos();
    // }
}
