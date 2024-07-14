import { Injectable } from "@nestjs/common";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/services/tipo-instituicao.service";

@Injectable()
export class FindTipoInstituicaoByIdUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) { }

    async execute(id: number): Promise<TipoInstituicao | null> {
        return this.tipoInstituicaoService.findTipoInstituicaoById(+id);
    }
}