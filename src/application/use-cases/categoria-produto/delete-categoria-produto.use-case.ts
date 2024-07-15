import { Injectable } from "@nestjs/common";
import { CategoriaProdutoService } from "src/domain/service/categoria-produto.service";
@Injectable()
export class DeletecategoriaProdutoUseCase {
    constructor(private readonly categoriaProdutoService: CategoriaProdutoService) { }

    async execute(id: number): Promise<void> {
        return this.categoriaProdutoService.deleteCategoriaProduto(id);
    }
}