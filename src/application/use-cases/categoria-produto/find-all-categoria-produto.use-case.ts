import { Injectable } from "@nestjs/common";
import { CategoriaProduto } from "src/domain/entities/categoria-produto.entity";
import { CategoriaProdutoService } from "src/domain/service/categoria-produto.service";



@Injectable()
export class FindAllCategoriaProduto {
    constructor(private readonly categoriaProdutoService: CategoriaProdutoService) { }

    async execute(): Promise<CategoriaProduto[]> {
        return this.categoriaProdutoService.findAllCategoriaProduto();
    }
}