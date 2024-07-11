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



}