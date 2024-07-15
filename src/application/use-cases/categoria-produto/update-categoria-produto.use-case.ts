import { Injectable } from "@nestjs/common";
import { CategoriaProduto } from "src/domain/entities/categoria-produto.entity";
import { CategoriaProdutoService } from "src/domain/service/categoria-produto.service";


@Injectable()
export class UpdateCategoriaProdutoUseCase {
    constructor(private readonly categoriaProdutoService: CategoriaProdutoService) { }

    async execute(id: number, descricao: string): Promise<CategoriaProduto> {
        return this.categoriaProdutoService.updateCategoriaProduto(id, descricao)
    }
}
