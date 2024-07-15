import { Logradouro } from "../entities/logradouro.entity";

export interface LogradouroRepository {
    create(logradouro: Logradouro): Promise<Logradouro>;
    update(id: number, logradouro: Logradouro): Promise<Logradouro>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Logradouro[]>;
    findById(id: number): Promise<Logradouro | null>;
    findByName(name: string): Promise<Logradouro | null>;
    isNomeUnique(nome: string): Promise<boolean>;
    
}