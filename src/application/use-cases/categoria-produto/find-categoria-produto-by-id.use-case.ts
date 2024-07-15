import { Injectable } from "@nestjs/common";
import { CategoriaProduto } from "src/domain/entities/categoria-produto.entity";
import { CategoriaProdutoService } from "src/domain/service/categoria-produto.service";


@Injectable()
export class FindCategoriaProdutoByIdUseCase {
    constructor(private readonly categoriaProdutoService: CategoriaProdutoService) { }

    async execute(id: number): Promise<CategoriaProduto | null> {
        return this.categoriaProdutoService.findCategoriaProdutoById(id);
    }
}