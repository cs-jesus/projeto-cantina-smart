import { Instituicao } from "../entities/instituicao.entity";

export interface InstituicaoRepository {
    create(instituicao: Instituicao): Promise<Instituicao>;
    update(id: number, instituicao: Instituicao): Promise<Instituicao>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Instituicao[]>;
    findById(id: number): Promise<Instituicao | null>;
    findByName(name: string): Promise<Instituicao | null>;
    isNomeUnique(nome: string): Promise<boolean>; // Novo método para verificar se o nome é único

}
