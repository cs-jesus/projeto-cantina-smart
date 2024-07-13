import { Injectable } from "@nestjs/common";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoService } from "src/domain/services/tipo-instituicao.service";

@Injectable()
export class FindAllTipoInstituicoesUseCase {
    constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) { }

    async execute(): Promise<TipoInstituicao[]> {
        return this.tipoInstituicaoService.findAllTipoInstituicoes();
    }
}