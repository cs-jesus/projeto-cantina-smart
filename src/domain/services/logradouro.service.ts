import { Injectable, Inject } from "@nestjs/common";

import { LogradouroRepository } from "../repositories/logradouro.repository";
import { Logradouro } from "../entities/logradouro.entity";

@Injectable()
export class LogradouroService {
    constructor(
        @Inject('LogradouroRepository')
        private readonly logradouroRepository: LogradouroRepository
    ) { }

    async validateOrCreateLogradouro(nome: string): Promise<number> {
        const checkLogradouro = await this.logradouroRepository.findByName(nome);
        if (checkLogradouro) {
            return checkLogradouro.id;

        } else {
            const newLogradouro = await this.logradouroRepository.create({ nome });
            return newLogradouro.id;
            
        }
    }

    async updateLogradouro(id: number, nome: string): Promise<Logradouro> {
        const nomeIsUnique = await this.logradouroRepository.isNomeUnique(nome);
        if (!nomeIsUnique) {
            throw new Error(`O logradouro "${nome}" já está cadastado.`);
        }

        const logradouro = new Logradouro(nome);
        return this.logradouroRepository.update(+id, logradouro);
    }

    async deleteLogradouro(id: number): Promise<void> {
        return this.logradouroRepository.delete(+id)
    }

    async findAllLogradouros(): Promise<Logradouro[]> {
        return this.logradouroRepository.findAll();
    }

    async findLogradouroById(id: number): Promise<Logradouro | null> {
        return this.logradouroRepository.findById(+id);
    }

    async findLogradouroByName(nome: string): Promise<Logradouro | null> {
        return this.logradouroRepository.findByName(nome);
    }
}
