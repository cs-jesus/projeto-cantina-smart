import { Endereco } from '../entities/endereco.entity';

export interface EnderecoRepository {
    create(data: any): Promise<Endereco>;
    update(id: number, data: any): Promise<Endereco>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Endereco[]>;
    findById(id: number): Promise<Endereco | null>;
  
}
