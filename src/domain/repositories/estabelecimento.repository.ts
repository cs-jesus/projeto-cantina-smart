import { Estabelecimento } from "../entities/estabelecimento.entity";

export interface FilialRepository {
    create(Estabelecimento: Estabelecimento): Promise<Estabelecimento>;
    update(id: number, Filial : Estabelecimento): Promise<Estabelecimento>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Estabelecimento[]>;
    findById(id: number): Promise<Estabelecimento | null>;
    findByName(name: string): Promise<Estabelecimento | null>;
}
