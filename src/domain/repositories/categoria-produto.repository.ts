import { CategoriaProduto } from "../entities/categoria-produto.entity";

export interface CategoriaProdutoRepository{
    create(categoriaProduto:CategoriaProduto): Promise<CategoriaProduto>;
    update(id:number,categoriaProduto:CategoriaProduto): Promise<CategoriaProduto>;
    delete(id: number ): Promise<void>;
    findAll():Promise<CategoriaProduto[]>;
    findByld(id:number):Promise<CategoriaProduto|null>;
    findByName(descricao:string): Promise<CategoriaProduto|null>;
}
