import { TipoInstituicaoRepository } from '../repositories/tipo-instituicao.repository';
import { TipoInstituicao } from '../entities/tipo-instituicao.entity';

export class TipoInstituicaoService {
  constructor(private readonly tipoInstituicaoRepository: TipoInstituicaoRepository) {}

  async createTipoInstituicao(descricao: string): Promise<TipoInstituicao> {
    const tipoInstituicao = new TipoInstituicao(0, descricao);
    return this.tipoInstituicaoRepository.save(tipoInstituicao);
  }

  async updateTipoInstituicao(id: number, descricao: string): Promise<TipoInstituicao> {
    const tipoInstituicao = new TipoInstituicao(id, descricao);
    return this.tipoInstituicaoRepository.update(id, tipoInstituicao);
  }

  async deleteTipoInstituicao(id: number): Promise<void> {
    return this.tipoInstituicaoRepository.delete(id);
  }

  async getTipoInstituicaoById(id: number): Promise<TipoInstituicao | null> {
    return this.tipoInstituicaoRepository.findById(id);
  }

  async getTipoInstituicoes(): Promise<TipoInstituicao[]> {
    return this.tipoInstituicaoRepository.findAll();
  }

  async validateDescricao(descricao: string): Promise<boolean> {
    const tipoInstituicao = await this.tipoInstituicaoRepository.findByDescricao(descricao);
    return tipoInstituicao !== null;
  }
}
