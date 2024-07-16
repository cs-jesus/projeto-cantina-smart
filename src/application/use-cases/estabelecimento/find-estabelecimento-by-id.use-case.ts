import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/estabelecimento.service";

@Injectable()
export class FindEstabelecimentoByIdUseCase {
    // constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    // async execute(id: number): Promise<Estabelecimento | null> {
    //     return this.EstabelecimentoService.findEstabelecimentoById(+id);
    // }
}
