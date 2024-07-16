import { Injectable } from "@nestjs/common";
import { Juridica } from "src/domain/entities/Juridica.entity";
import { JuridicaService } from "src/domain/services/Juridica.service";

@Injectable()
export class FindJuridicaByNameUseCase {
    constructor(private readonly JuridicaService: JuridicaService) { }

    async execute(nome: string): Promise<Juridica | null> {
        return this.JuridicaService.findJuridicaByName(nome);
    }
}
