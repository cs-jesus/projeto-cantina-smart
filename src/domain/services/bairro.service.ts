import { Injectable, Inject } from "@nestjs/common";

import { BairroRepository } from "../repositories/bairro.repository";
import { Bairro } from "../entities/bairro.entity";

@Injectable()
export class BairroService {
    constructor(
        @Inject('BairroRepository')
        private readonly bairroRepository: BairroRepository
    ) { }

    async createBairro(nome: string): Promise<Bairro> {
        const bairro = new Bairro(nome);
        return this.bairroRepository.create(bairro);
    }

    async updateBairro(id: number, nome: string): Promise<Bairro> {
        const bairro = new Bairro(nome);
        return this.bairroRepository.update(+id, bairro);
    }

    async deleteBairro(id: number): Promise<void> {
        return this.bairroRepository.delete(+id)
    }

    async findAllBairros(): Promise<Bairro[]> {
        return this.bairroRepository.findAll();
    }

    async findBairroById(id: number): Promise<Bairro | null> {
        return this.bairroRepository.findById(+id);
    }

    async findBairroByName(nome: string): Promise<Bairro | null> {
        return this.bairroRepository.findByName(nome);
    }
}
