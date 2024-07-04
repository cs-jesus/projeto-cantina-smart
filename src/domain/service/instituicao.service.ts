import { InstituicaoRepository } from '../repositories/instituicao.repository';
import { Instituicao } from '../entities/instituicao.entity';

export class InstituicaoService {
  constructor(private readonly instituicaoRepository: InstituicaoRepository) {}

  async createInstituicao(nome: string, sigla: string, tipoInstituicaoId: number): Promise<Instituicao> {
    const instituicao = new Instituicao(0, tipoInstituicaoId, nome, sigla);
    return this.instituicaoRepository.save(instituicao);
  }

  async updateInstituicao(id: number, nome: string, sigla: string, tipoInstituicaoId: number): Promise<Instituicao> {
    const instituicao = new Instituicao(id, tipoInstituicaoId, nome, sigla);
    return this.instituicaoRepository.update(id, instituicao);
  }

  async deleteInstituicao(id: number): Promise<void> {
    return this.instituicaoRepository.delete(id);
  }

  async getInstituicaoById(id: number): Promise<Instituicao | null> {
    return this.instituicaoRepository.findById(id);
  }

  async getInstituicoes(): Promise<Instituicao[]> {
    return this.instituicaoRepository.findAll();
  }

  async validateNome(nome: string): Promise<boolean> {
    const instituicao = await this.instituicaoRepository.findByNome(nome);
    return instituicao !== null;
  }
}
