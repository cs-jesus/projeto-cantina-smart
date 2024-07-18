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
            const newLogradouro = await this.logradouroRepository.create(new Logradouro (0, nome));
            return newLogradouro.id;
            
        }
    }

    async createLogradouro(nome: string): Promise<Logradouro> {
        const logradouro = new Logradouro(0, nome);
        return this.logradouroRepository.create(logradouro)
    }

    async updateBLogradouro(id: number, nome: string): Promise<Logradouro> {
        const logradouro = new Logradouro(id, nome);
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
