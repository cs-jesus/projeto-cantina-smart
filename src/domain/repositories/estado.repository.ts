import { Estado } from "../entities/estado.entity";

export interface EstadoRepository {
    create(estado: Estado): Promise<Estado>;
    update(id: number, estado : Estado): Promise<Estado>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Estado[]>;
    findById(id: number): Promise<Estado | null>;
    findByUf(uf: string): Promise<Estado | null>;
}
