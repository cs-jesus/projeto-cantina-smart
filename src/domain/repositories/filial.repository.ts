import { Filial } from "../entities/filial.entity";

export interface FilialRepository {
    create(filial: Filial): Promise<Filial>;
    update(id: number, filial : Filial): Promise<Filial>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Filial[]>;
    findById(id: number): Promise<Filial | null>;
    findByName(name: string): Promise<Filial| null>;
}
