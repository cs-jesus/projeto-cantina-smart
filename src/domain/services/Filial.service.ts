import { Injectable, Inject } from "@nestjs/common";

import { FilialRepository } from "../repositories/Filial.repository";
import { Filial } from "../entities/Filial.entity";

@Injectable()
export class FilialService {
    constructor(
        @Inject('FilialRepository')
        private readonly FilialRepository: FilialRepository
    ) { }

    async createFilial(nome: string): Promise<Filial> {
        const Filial = new Filial(nome);
        return this.FilialRepository.create(Filial);
    }

    async updateFilial(id: number, nome: string): Promise<Filial> {
        const Filial = new Filial(nome);
        return this.FilialRepository.update(+id, Filial);
    }

    async deleteFilial(id: number): Promise<void> {
        return this.FilialRepository.delete(+id)
    }

    async findAllFilial(): Promise<Filial[]> {
        return this.FilialRepository.findAll();
    }

    async findFilialById(id: number): Promise<Filial | null> {
        return this.FilialRepository.findById(+id);
    }

    async findFilialByName(nome: string): Promise<Filial | null> {
        return this.FilialRepository.findByName(nome);
    }
}
