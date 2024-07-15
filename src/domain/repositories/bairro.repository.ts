import { Bairro } from "../entities/bairro.entity";

export interface BairroRepository {
    create(bairro: Bairro): Promise<Bairro>;
    update(id: number, bairro : Bairro): Promise<Bairro>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Bairro[]>;
    findById(id: number): Promise<Bairro | null>;
    findByName(name: string): Promise<Bairro | null>;
    isNomeUnique(nome: string): Promise<boolean>;
    
}
