import { Filial } from "../entities/Filial.entity";

export interface FilialRepository {
    create(Filial: Filial): Promise<Filial>;
    update(id: number, Filial : Filial): Promise<Filial>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Filial[]>;
    findById(id: number): Promise<Filial | null>;
    findByName(name: string): Promise<Filial| null>;
}
