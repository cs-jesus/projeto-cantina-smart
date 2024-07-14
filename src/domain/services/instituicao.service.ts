import { Inject, Injectable } from '@nestjs/common';

import { InstituicaoRepository } from '../repositories/instituicao.repository';
import { Instituicao } from '../entities/instituicao.entity';

@Injectable()
export class InstituicaoService {
    constructor(
        @Inject('InstituicaoRepository')
        private readonly instituicaoRepository: InstituicaoRepository
    ) { }

    async createInstituicao(tipoInstituicaoId: number, nome: string, sigla: string): Promise<Instituicao> {
        const nomeIsUnique = await this.instituicaoRepository.isNomeUnique(nome);
        if (!nomeIsUnique) {
            throw new Error(`O nome "${nome}" já está sendo utilizado por outra instituição.`);
        }

        const instituicao = new Instituicao(tipoInstituicaoId, nome, sigla);
        return this.instituicaoRepository.create(instituicao);
    }

    async updateInstituicao(id: number, tipoInstituicaoId: number, nome: string, sigla: string): Promise<Instituicao> {
        const nomeIsUnique = await this.instituicaoRepository.isNomeUnique(nome);
        if (!nomeIsUnique) {
            throw new Error(`O nome "${nome}" já está sendo utilizado por outra instituição.`);
        }

        const instituicao = new Instituicao(tipoInstituicaoId, nome, sigla);
        return this.instituicaoRepository.update(id, instituicao);
    }

    async deleteInstituicao(id: number): Promise<void> {
        return this.instituicaoRepository.delete(+id);
    }

    async findAllInstituicoes(): Promise<Instituicao[]> {
        return this.instituicaoRepository.findAll();
    }

    async findInstituicaoById(id: number): Promise<Instituicao | null> {
        return this.instituicaoRepository.findById(+id);
    }

    async findInstituicaoByName(nome: string): Promise<Instituicao | null> {
        return this.instituicaoRepository.findByName(nome);
    }
}
