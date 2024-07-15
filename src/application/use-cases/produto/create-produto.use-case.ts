import { Injectable } from "@nestjs/common";
import { Produto } from "src/domain/entities/produto.entity";
import { ProdutoService } from "src/domain/service/produto.service";
@Injectable()
export class CreateProdutoUseCase {
    constructor(private readonly produtoService: ProdutoService) {}

    async execute(nome: string): Promise<Produto> {
        return this.produtoService.createProduto(nome);
    }
}