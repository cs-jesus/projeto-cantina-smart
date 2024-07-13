import { CidadeRepository } from "../repositories/cidade.repository";
import { Cidade } from "../entities/cidade.entity";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class CidadeService {
    constructor(
        @Inject('CidadeRepository')
        private readonly cidadeRepository: CidadeRepository
    ) { }

    async createCidade(nome: string): Promise<Cidade> {
        const cidade = new Cidade(nome);
        return this.cidadeRepository.create(cidade);
    }

    async updateCidade(id: number, nome: string): Promise<Cidade> {
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
