import { LogradouroRepository } from "../repositories/logradouro.repository";
import { Logradouro } from "../entities/logradouro.entity";
import { Injectable, Inject } from "@nestjs/common";
import { promises } from "dns";

@Injectable()
export class LogradouroService {
    constructor(
        @Inject('LogradouroRepository')
        private readonly logradouroRepository: LogradouroRepository
    ) { }

    async createLogradouro(nome: string): Promise<Logradouro> {
        const logradouro = new Logradouro(nome);
        return this.logradouroRepository.create(logradouro);
    }

    async updateLogradouro(id: number, nome: string): Promise<Logradouro> {
        const logradouro = new Logradouro(nome);
        return this.logradouroRepository.update(id, logradouro);
    }

    async deleteLogradouro(id: number): Promise<void> {
        return this.logradouroRepository.delete(id)
    }

    async findAllLogradouros(): Promise<Logradouro[]> {
        return this.logradouroRepository.findAll();
    }

    async findLogradouroById(id: number): Promise<Logradouro | null> {
        return this.logradouroRepository.findById(id);
    }

    async findLogradouroByName(nome: string): Promise<Logradouro | null> {
        return this.logradouroRepository.findByName(nome);
    }


}