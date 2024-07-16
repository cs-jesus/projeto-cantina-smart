import { Injectable, Inject } from "@nestjs/common";

import { JuridicaRepository } from "../repositories/Juridica.repository";
import { Juridica } from "../entities/Juridica.entity";

@Injectable()
export class JuridicaService {
    constructor(
        @Inject('JuridicaRepository')
        private readonly JuridicaRepository: JuridicaRepository
    ) { }

    async createJuridica(nome: string): Promise<Juridica> {
        const Juridica = new Juridica(nome);
        return this.JuridicaRepository.create(Juridica);
    }

    async updateJuridica(id: number, nome: string): Promise<Juridica> {
        const Juridica = new Juridica(nome);
        return this.JuridicaRepository.update(+id, Juridica);
    }

    async deleteJuridica(id: number): Promise<void> {
        return this.JuridicaRepository.delete(+id)
    }

    async findAllJuridica(): Promise<Juridica[]> {
        return this.JuridicaRepository.findAll();
    }

    async findJuridicaById(id: number): Promise<Juridica | null> {
        return this.JuridicaRepository.findById(+id);
    }

    async findJuridicaByName(nome: string): Promise<Juridica | null> {
        return this.JuridicaRepository.findByName(nome);
    }
}
