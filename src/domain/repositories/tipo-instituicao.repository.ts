import { TipoInstituicao } from '../entities/tipo-instituicao.entity';

export interface TipoInstituicaoRepository {
  save(tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao>;
  update(id: number, tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<TipoInstituicao | null>;
  findAll(): Promise<TipoInstituicao[]>;
  findByDescricao(descricao: string): Promise<TipoInstituicao | null>;
}
