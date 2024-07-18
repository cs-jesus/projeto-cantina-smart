import { Endereco } from '../entities/endereco.entity';

export interface EnderecoRepository {
    create(endereco: Endereco): Promise<Endereco>;
    update(id: number, endereco: Endereco): Promise<Endereco>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Endereco[]>;
    findById(id: number): Promise<Endereco | null>;
    findByCepAndNumero(cep: string, numero: string): Promise<Endereco | null>;

}
