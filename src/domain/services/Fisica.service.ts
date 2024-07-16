import { Injectable, Inject } from "@nestjs/common";

import { FisicaRepository } from "../repositories/Fisica.repository";
import { Fisica } from "../entities/Fisica.entity";

@Injectable()
export class FisicaService {
    constructor(
        @Inject('FisicaRepository')
        private readonly FisicaRepository: FisicaRepository
    ) { }

    async createFisica(nome: string): Promise<Fisica> {
        const Fisica = new Fisica(nome);
        return this.FisicaRepository.create(Fisica);
    }

    async updateFisica(id: number, nome: string): Promise<Fisica> {
        const Fisica = new Fisica(nome);
        return this.FisicaRepository.update(+id, Fisica);
    }

    async deleteFisica(id: number): Promise<void> {
        return this.FisicaRepository.delete(+id)
    }

    async findAllFisica(): Promise<Fisica[]> {
        return this.FisicaRepository.findAll();
    }

    async findFisicaById(id: number): Promise<Fisica | null> {
        return this.FisicaRepository.findById(+id);
    }

    async findFisicaByName(nome: string): Promise<Fisica | null> {
        return this.FisicaRepository.findByName(nome);
    }
}
