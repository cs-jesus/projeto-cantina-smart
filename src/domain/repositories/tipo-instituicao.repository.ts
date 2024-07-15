import { TipoInstituicao } from '../entities/tipo-instituicao.entity';

export interface TipoInstituicaoRepository {
    create(tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao>;
    update(id: number, tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao>;
    delete(id: number): Promise<void>;
    findAll(): Promise<TipoInstituicao[]>;
    findById(id: number): Promise<TipoInstituicao | null>;
    findByDescricao(descricao: string): Promise<TipoInstituicao | null>;
    isDescricaoUnique(descricao: string): Promise<boolean>;

}
