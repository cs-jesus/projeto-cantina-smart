import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/estabelecimento.service";

@Injectable()
export class FindEstabelecimentoByCNPJUseCase {
    // constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    // async execute(nome: string): Promise<Estabelecimento | null> {
    //     return this.EstabelecimentoService.findEstabelecimentoByName(nome);
    // }
}
