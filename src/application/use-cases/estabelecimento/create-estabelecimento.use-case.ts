import { Injectable } from "@nestjs/common";
import { Estabelecimento } from "src/domain/entities/estabelecimento.entity";
import { EstabelecimentoService } from "src/domain/services/estabelecimento.service";

@Injectable()
export class CreateEstabelecimentoUseCase {
    // constructor(private readonly EstabelecimentoService: EstabelecimentoService) { }

    // async execute(nome: string): Promise<Estabelecimento> {
    //     return this.EstabelecimentoService.CreateEstabelecimentoUseCase(nome);
    // }
}
