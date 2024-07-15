import { Inject, Injectable } from "@nestjs/common";
import { CategoriaProdutoRepository } from "../repositories/categoria-produto.repository";
import { CategoriaProduto } from "../entities/categoria-produto.entity";

@Injectable()
export class CategoriaProdutoService{
    constructor(
        @Inject('CategoriaProdutoRepository')
        private readonly categoriaProdutoRepository: CategoriaProdutoRepository
    ){}
    async createCategoriaProduto(descricao:string): Promise<CategoriaProduto> {
        const categoriaProduto = new CategoriaProduto(descricao);
        return this.categoriaProdutoRepository.create(categoriaProduto);
    }
    async updateCategoriaProduto(id: number, descricao: string): Promise<CategoriaProduto> {
        const categoriaProduto = new CategoriaProduto(descricao);
        return this.categoriaProdutoRepository.update(id,categoriaProduto);
    }
    async deleteCategoriaProduto(id: number): Promise<void> {
        return this.categoriaProdutoRepository.delete(id)
    }
    async findAllCategoriaProduto(): Promise<CategoriaProduto[]> {
        return this.categoriaProdutoRepository.findAll();
    }
   async findCategoriaProdutoById(id:number):Promise <CategoriaProduto|null>{
    return this.categoriaProdutoRepository.findByld(id);
   }
   async findCategoriaProdutoByName(descricao: string): Promise<CategoriaProduto | null> {
    return this.categoriaProdutoRepository.findByName(descricao);
}
    
}