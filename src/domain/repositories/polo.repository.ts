import { Polo } from "../entities/polo.entity";

export interface PoloRepository {
    create(polo: Polo): Promise<Polo>;
    update(id: number, polo: Polo): Promise<Polo>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Polo[]>;
    findById(id: number): Promise<Polo | null>;
    findByName(name: string): Promise<Polo | null>;
    isNomeUnique(nome: string): Promise<boolean>;

}
