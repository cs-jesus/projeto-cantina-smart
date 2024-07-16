import { Injectable, Inject } from "@nestjs/common";

import { JuridicaRepository } from "../repositories/juridica.repository";
import { Juridica } from "../entities/juridica.entity";

@Injectable()
export class JuridicaService {
    constructor(
        @Inject('JuridicaRepository')
        private readonly JuridicaRepository: JuridicaRepository
    ) { }

    // async createJuridica(nome: string): Promise<Juridica> {
    //     const Juridica = new Juridica(nome);
    //     return this.JuridicaRepository.create(Juridica);
    // }

    // async updateJuridica(id: number, nome: string): Promise<Juridica> {
    //     const Juridica = new Juridica(nome);
    //     return this.JuridicaRepository.update(+id, Juridica);
    // }

    // async deleteJuridica(id: number): Promise<void> {
    //     return this.JuridicaRepository.delete(+id)
    // }

    // async findAllJuridica(): Promise<Juridica[]> {
    //     return this.JuridicaRepository.findAll();
    // }

    // async findJuridicaById(id: number): Promise<Juridica | null> {
    //     return this.JuridicaRepository.findById(+id);
    // }

    // async findJuridicaByName(cnpj: string): Promise<Juridica | null> {
    //     return this.JuridicaRepository.findByCNPJ(cnpj);
    // }
}
