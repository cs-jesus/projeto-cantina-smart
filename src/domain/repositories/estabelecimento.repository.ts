import { Estabelecimento } from "../entities/estabelecimento.entity";

export interface EstabelecimentoRepository {
    create(estabelecimento: Estabelecimento): Promise<Estabelecimento>;
    update(id: number, estabelecimento : Estabelecimento): Promise<Estabelecimento>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Estabelecimento[]>;
    findById(id: number): Promise<Estabelecimento | null>;
    findByName(name: string): Promise<Estabelecimento | null>;
}
