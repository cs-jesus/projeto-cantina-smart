import { Injectable, Inject } from "@nestjs/common";

import { EstadoRepository } from "../repositories/estado.repository";
import { Estado } from "../entities/estado.entity";

@Injectable()
export class EstadoService {
    constructor(
        @Inject('EstadoRepository')
        private readonly estadoRepository: EstadoRepository
    ) { }

    async validateOrCreateEstado(uf: string): Promise<number> {
        const checkEstado = await this.estadoRepository.findByUf(uf);
        if (checkEstado) {
            return checkEstado.id;

        } else {
            const newEstado = await this.estadoRepository.create(new Estado (0, uf));
            return newEstado.id;
            
        }
    }

    async createEstado(uf: string): Promise<Estado> {
        const estado = new Estado(0, uf);
        return this.estadoRepository.create(estado)
    }

    async updateEstado(id: number, uf: string): Promise<Estado> {
        const estado = new Estado(id, uf);
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
