import { Injectable } from "@nestjs/common";
import { UnidadeMedida } from "src/domain/entities/unidade-medida.entity";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";


@Injectable()
export class FindUnidadeMedidaByNameUseCase {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

    async execute(nome: string, sigla:string): Promise<UnidadeMedida | null> {
        return this.unidadeMedidaService.findUnidadeMedidaByName(nome,sigla);
    }
}