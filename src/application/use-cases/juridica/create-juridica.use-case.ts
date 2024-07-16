import { Injectable } from "@nestjs/common";
import { Juridica } from "src/domain/entities/juridica.entity";
import { JuridicaService } from "src/domain/services/juridica.service";

@Injectable()
export class CreateJuridicaUseCase {
    // constructor(private readonly JuridicaService: JuridicaService) { }

    // async execute(nome: string): Promise<Juridica> {
    //     return this.JuridicaService.createJuridica(nome);
    // }
}
