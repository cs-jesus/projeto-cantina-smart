import { Injectable } from "@nestjs/common";
import { CategoriaProduto } from "src/domain/entities/categoria-produto.entity";
import { CategoriaProdutoService } from "src/domain/services/categoria-produto.service";


@Injectable()
export class CreateCategoriaProdutoUseCase {
    constructor(private readonly categoriaProdutoService: CategoriaProdutoService) {}

    async execute(descricao: string): Promise<CategoriaProduto> {
        return this.categoriaProdutoService.createCategoriaProduto(descricao);
    }
}