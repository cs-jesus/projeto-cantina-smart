import { Cidade } from "../entities/cidade.entity";

export interface CidadeRepository {
    create(cidade: Cidade): Promise<Cidade>;
    update(id: number, cidade : Cidade): Promise<Cidade>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Cidade[]>;
    findById(id: number): Promise<Cidade | null>;
    findByName(name: string): Promise<Cidade | null>;
}
