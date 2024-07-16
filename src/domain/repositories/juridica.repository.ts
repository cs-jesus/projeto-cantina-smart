
import { Juridica } from "./juridica.entity";

export interface JuridicaRepository {
    create(Juridica: Juridica): Promise<Juridica>;
    update(id: number, Juridica : Juridica): Promise<Juridica>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Juridica[]>;
    findById(id: number): Promise<Juridica | null>;
    findByName(name: string): Promise<Juridica | null>;
}
