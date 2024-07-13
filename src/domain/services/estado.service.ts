import { Injectable, Inject } from "@nestjs/common";

import { EstadoRepository } from "../repositories/estado.repository";
import { Estado } from "../entities/estado.entity";

@Injectable()
export class EstadoService {
    constructor(
        @Inject('EstadoRepository')
        private readonly estadoRepository: EstadoRepository
    ) { }

    async createEstado(uf: string): Promise<Estado> {
        const estado = new Estado(uf);
        return this.estadoRepository.create(estado);
    }

    async updateEstado(id: number, uf: string): Promise<Estado> {
        const estado = new Estado(uf);
        return this.estadoRepository.update(+id, estado);
    }

    async deleteEstado(id: number): Promise<void> {
        return this.estadoRepository.delete(+id)
    }

    async findAllEstados(): Promise<Estado[]> {
        return this.estadoRepository.findAll();
    }

    async findEstadoById(id: number): Promise<Estado | null> {
        return this.estadoRepository.findById(+id);
    }

    async findEstadoByUf(uf: string): Promise<Estado | null> {
        return this.estadoRepository.findByUf(uf);
    }
}
