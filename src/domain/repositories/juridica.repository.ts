import { Juridica } from "../entities/juridica.entity";

export interface JuridicaRepository {
    create(juridica: Juridica): Promise<Juridica>;
    update(id: number, juridica: Juridica): Promise<Juridica>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Juridica[]>;
    findById(id: number): Promise<Juridica | null>;
    findByCNPJ(cnpj: string): Promise<Juridica | null>;
}
