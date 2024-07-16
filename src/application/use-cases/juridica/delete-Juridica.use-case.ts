import { Injectable } from "@nestjs/common";
import { JuridicaService } from "src/domain/services/Juridica.service";

@Injectable()
export class DeleteJuridicaUseCase {
    constructor(private readonly JuridicaService: JuridicaService) { }

    async execute(id: number): Promise<void> {
        return this.JuridicaService.deleteJuridica(+id);
    }
}
