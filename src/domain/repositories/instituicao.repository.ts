import { Instituicao } from "../entities/instituicao.entity";

export interface InstituicaoRepository {
  save(instituicao: Instituicao): Promise<Instituicao>;
  update(id: number, instituicao: Instituicao): Promise<Instituicao>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Instituicao | null>;
  findAll(): Promise<Instituicao[]>;
  findByNome(nome: string): Promise<Instituicao | null>;
}
