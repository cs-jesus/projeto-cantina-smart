import { Injectable } from "@nestjs/common";
import { Juridica } from "src/domain/entities/juridica.entity";
import { JuridicaService } from "src/domain/services/juridica.service";

@Injectable()
export class FindJuridicaByIdUseCase {
    // constructor(private readonly JuridicaService: JuridicaService) { }

    // async execute(id: number): Promise<Juridica | null> {
    //     return this.JuridicaService.findJuridicaById(+id);
    // }
}
