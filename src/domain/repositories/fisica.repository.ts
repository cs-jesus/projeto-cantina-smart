import { Fisica } from "../entities/Fisica.entity";

export interface FisicaRepository {
    create(Estabelecimento: Fisica): Promise<Fisica>;
    update(id: number, Filial : Fisica): Promise<Fisica>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Fisica[]>;
    findById(id: number): Promise<Fisica | null>;
    findByName(name: string): Promise<Fisica | null>;
}
