import { Inject, Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../repositories/produto.repository";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService{
    constructor(
        @Inject('ProdutoRepository')
        private readonly produtoRepository:ProdutoRepository
    ){}
    async createProduto(nome: string): Promise<Produto> {
        const produto = new Produto(nome);
        return this.produtoRepository.create(produto);
    }
    async updateProduto(id: number, nome: string): Promise<Produto> {
        const produto = new Produto(nome);
        return this.produtoRepository.update(id, produto);
    }
    async deleteProduto (id: number): Promise<void> {
        return this.produtoRepository.delete(id)
    }
    async findAllProduto(): Promise<Produto[]> {
        return this.produtoRepository.findAll();
    }
    async findProdutoById(id: number): Promise<Produto | null> {
        return this.produtoRepository.findById(id);
    }
    async findProdutoByName(nome: string): Promise<Produto | null> {
        return this.produtoRepository.findByName(nome);
    }
}
