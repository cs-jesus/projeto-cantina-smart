import { UnidadeMedida } from "../entities/unidade-medida.entity";

export interface UnidadeMedidaRepository {
    create(unidadeMedida: UnidadeMedida): Promise<UnidadeMedida>;
    update(id: number, unidadeMedida: UnidadeMedida): Promise<UnidadeMedida>;
    delete(id: number): Promise<void>;
    findAll(): Promise<UnidadeMedida[]>;
    findById(id: number): Promise<UnidadeMedida | null>;
    findByName(name: string,sigla:string): Promise<UnidadeMedida | null>;

}
