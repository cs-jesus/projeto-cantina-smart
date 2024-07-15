import { Injectable } from "@nestjs/common";
import { Produto } from "src/domain/entities/produto.entity";
import { ProdutoService } from "src/domain/service/produto.service";


@Injectable()
export class FindProdutoByNameUseCase {
    constructor(private readonly produtoService: ProdutoService) { }

    async execute(nome: string): Promise<Produto | null> {
        return this.produtoService.findProdutoByName(nome);
    }
}
