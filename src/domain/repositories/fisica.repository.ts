import { Fisica } from "../entities/fisica.entity";

export interface FisicaRepository {
    create(filial: Fisica): Promise<Fisica>;
    update(id: number, filial: Fisica): Promise<Fisica>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Fisica[]>;
    findById(id: number): Promise<Fisica | null>;
    findByName(name: string): Promise<Fisica | null>;
}
