import { Injectable } from "@nestjs/common";
import { Produto } from "src/domain/entities/produto.entity";
import { ProdutoService } from "src/domain/service/produto.service";


@Injectable()
export class FindAllProduto {
    constructor(private readonly produtoService: ProdutoService) { }

    async execute(): Promise<Produto[]> {
        return this.produtoService.findAllProduto();
    }
}