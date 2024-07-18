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
        const checkCidade = await this.cidadeRepository.findByName(nome);
        if (checkCidade) {
            return checkCidade.id;

        } else {
            const newCidade = await this.cidadeRepository.create(new Cidade (0, nome));
            return newCidade.id;
            
        }
    }

    async createCidade(nome: string): Promise<Cidade> {
        const cidade = new Cidade(0, nome);
        return this.cidadeRepository.create(cidade)
    }

    async updateCidade(id: number, nome: string): Promise<Cidade> {
        const cidade = new Cidade(id, nome);
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
