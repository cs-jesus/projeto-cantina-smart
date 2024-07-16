import { Injectable } from "@nestjs/common";
import { Juridica } from "src/domain/entities/Juridica.entity";
import { JuridicaService } from "src/domain/services/Juridica.service";

@Injectable()
export class CreateJuridicaUseCase {
    constructor(private readonly JuridicaService: JuridicaService) { }

    async execute(nome: string): Promise<Juridica> {
        return this.JuridicaService.createJuridica(nome);
    }
}
