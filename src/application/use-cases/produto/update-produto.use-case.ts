import { Injectable } from "@nestjs/common";
import { Produto } from "src/domain/entities/produto.entity";
import { ProdutoService } from "src/domain/service/produto.service";


@Injectable()
export class UpdateProdutoUseCase {
    constructor(private readonly produtoService: ProdutoService) { }

    async execute(id: number, nome: string): Promise<Produto> {
        return this.produtoService.updateProduto(id, nome)
    }
}
