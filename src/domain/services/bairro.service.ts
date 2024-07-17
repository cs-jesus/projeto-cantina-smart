import { Injectable, Inject } from "@nestjs/common";

import { Bairro } from "../entities/bairro.entity";
import { BairroRepository } from "../repositories/bairro.repository";

@Injectable()
export class BairroService {
    constructor(
        @Inject('BairroRepository')
        private readonly bairroRepository: BairroRepository
    ) { }

    async validateOrCreateBairro(nome: string): Promise<number> {
        const checkBairro = await this.bairroRepository.findByName(nome);
        if (checkBairro) {
            return checkBairro.id;

        } else {
            const newBairro = await this.bairroRepository.create({ nome });
            return newBairro.id;
        }
    }

    async updateBairro(id: number, nome: string): Promise<Bairro> {
        let checkBairro = await this.bairroRepository.findByName(nome);
        if (!checkBairro) {
            checkBairro = await this.bairroRepository.create({ nome });

        }

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
