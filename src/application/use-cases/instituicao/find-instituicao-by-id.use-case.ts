import { Injectable } from "@nestjs/common";
import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoService } from "src/domain/services/instituicao.service";

@Injectable()
export class FindInstituicaoByIdUseCase {
    constructor(private readonly InstituicaoService: InstituicaoService) { }

    async execute(id: number): Promise<Instituicao | null> {
        return this.InstituicaoService.findInstituicaoById(+id);
    }
}
