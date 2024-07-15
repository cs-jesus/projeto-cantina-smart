import { Injectable } from "@nestjs/common";
import { ProdutoService } from "src/domain/service/produto.service";


@Injectable()
export class DeleteProdutoUseCase {
    constructor(private readonly produtoService: ProdutoService) { }

    async execute(id: number): Promise<void> {
        return this.produtoService.deleteProduto(id);
    }
}