import { Injectable, Inject } from "@nestjs/common";

import { EstabelecimentoRepository } from "../repositories/Estabelecimento.repository";
import { Estabelecimento } from "../entities/Estabelecimento.entity";

@Injectable()
export class EstabelecimentoService {
    constructor(
        @Inject('EstabelecimentoRepository')
        private readonly EstabelecimentoRepository: EstabelecimentoRepository
    ) { }

    async createEstabelecimento(nome: string): Promise<Estabelecimento> {
        const Estabelecimento = new Estabelecimento(nome);
        return this.EstabelecimentoRepository.create(Estabelecimento);
    }

    async updateEstabelecimento(id: number, nome: string): Promise<Estabelecimento> {
        const Estabelecimento = new Estabelecimento(nome);
        return this.EstabelecimentoRepository.update(+id, Estabelecimento);
    }

    async deleteEstabelecimento(id: number): Promise<void> {
        return this.EstabelecimentoRepository.delete(+id)
    }

    async findAllEstabelecimento(): Promise<Estabelecimento[]> {
        return this.EstabelecimentoRepository.findAll();
    }

    async findEstabelecimentoById(id: number): Promise<Estabelecimento | null> {
        return this.EstabelecimentoRepository.findById(+id);
    }

    async findEstabelecimentoByName(nome: string): Promise<Estabelecimento | null> {
        return this.EstabelecimentoRepository.findByName(nome);
    }
}
