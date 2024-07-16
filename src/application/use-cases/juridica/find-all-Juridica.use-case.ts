import { Injectable } from "@nestjs/common";
import { Juridica } from "src/domain/entities/Juridica.entity";
import { JuridicaService } from "src/domain/services/Juridica.service";

@Injectable()
export class FindAllJuridica {
    constructor(private readonly JuridicaService: JuridicaService) { }

    async execute(): Promise<Juridica[]> {
        return this.JuridicaService.findAllJuridica();
    }
}
