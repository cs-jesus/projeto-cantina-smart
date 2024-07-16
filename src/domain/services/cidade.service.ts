import { Injectable, Inject } from "@nestjs/common";

import { CidadeRepository } from "../repositories/cidade.repository";
import { Cidade } from "../entities/cidade.entity";

@Injectable()
export class CidadeService {
    constructor(
        @Inject('CidadeRepository')
        private readonly cidadeRepository: CidadeRepository
    ) { }

    async validateOrCreateCidade(nome: string): Promise<number> {
        let checkCidade = await this.cidadeRepository.findByName(nome);
        if (!checkCidade) {
            checkCidade = await this.cidadeRepository.create({ nome });

        }
        const cidade = checkCidade.id;
        return cidade;
    }

    async updateCidade(id: number, nome: string): Promise<Cidade> {
        const nomeIsUnique = await this.cidadeRepository.isNomeUnique(nome);
        if (!nomeIsUnique) {
            throw new Error(`A cidade "${nome}" já está cadastada.`);
        }

        const cidade = new Cidade(nome);
        return this.cidadeRepository.update(+id, cidade);
    }

    async deleteCidade(id: number): Promise<void> {
        return this.cidadeRepository.delete(+id)
    }

    async findAllCidades(): Promise<Cidade[]> {
        return this.cidadeRepository.findAll();
    }

    async findCidadeById(id: number): Promise<Cidade | null> {
        return this.cidadeRepository.findById(+id);
    }

    async findCidadeByName(nome: string): Promise<Cidade | null> {
        return this.cidadeRepository.findByName(nome);
    }
}
