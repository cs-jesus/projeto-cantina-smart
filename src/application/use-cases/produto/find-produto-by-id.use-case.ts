import { Injectable } from "@nestjs/common";
import { Produto } from "src/domain/entities/produto.entity";
import { ProdutoService } from "src/domain/service/produto.service";


@Injectable()
export class FindProdutoByIdUseCase {
    constructor(private readonly produtoService: ProdutoService) { }

    async execute(id: number): Promise<Produto | null> {
        return this.produtoService.findProdutoById(id);
    }
}