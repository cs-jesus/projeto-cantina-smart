import { Produto } from "../entities/produto.entity";

export interface ProdutoRepository{
    create(produto:Produto): Promise<Produto>;
    update(id: number, produto: Produto): Promise<Produto>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto | null>;
    findByName(name: string): Promise<Produto | null>;

}
