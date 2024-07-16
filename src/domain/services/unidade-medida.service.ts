import { Inject, Injectable } from "@nestjs/common";
import { UnidadeMedida } from "../entities/unidade-medida.entity";
import { UnidadeMedidaRepository } from "../repositories/unidade-medida.repository";

@Injectable()
export class UnidadeMedidaService {
    constructor(
        @Inject('UnidadeMedidaRepository')
        private readonly unidadeMedidaRepository: UnidadeMedidaRepository
    ) { }
    async createUnidadeMedida(nome: string, sigla: string): Promise<UnidadeMedida> {
        const unidadeMedida = new UnidadeMedida(nome, sigla);
        return this.unidadeMedidaRepository.create(unidadeMedida);
    }
    async updateUnidadeMedida(id: number, nome: string, sigla: string): Promise<UnidadeMedida> {
        const unidadeMedida = new UnidadeMedida(nome, sigla);
        return this.unidadeMedidaRepository.update(id, unidadeMedida);
    }
    async deleteUnidadeMedida(id: number): Promise<void> {
        return this.unidadeMedidaRepository.delete(id)
    }
    async findAllUnidadeMedida(): Promise<UnidadeMedida[]> {
        return this.unidadeMedidaRepository.findAll();
    }
    async findUnidadeMedidaById(id: number): Promise<UnidadeMedida | null> {
        return this.unidadeMedidaRepository.findById(id);
    }
    async findUnidadeMedidaByName(nome: string, sigla: string): Promise<UnidadeMedida | null> {
        return this.unidadeMedidaRepository.findByName(nome, sigla);
    }
}
