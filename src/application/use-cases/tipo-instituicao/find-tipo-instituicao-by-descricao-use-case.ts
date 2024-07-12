import { Injectable } from "@nestjs/common";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/service/tipo-instituicao.service";

@Injectable()
export class FindTipoInstituicaoByDescricaoUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) { }

    async execute(descricao: string): Promise<TipoInstituicao | null> {
        return this.tipoInstituicaoService.findTipoInstituicaoByDescricao(descricao);

    }
}
