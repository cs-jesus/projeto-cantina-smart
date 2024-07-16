import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { TipoEstabelecimento } from "src/domain/entities/tipo-estabelecimento.entity";
import { TipoEstabelecimentoRepository } from "src/domain/repositories/tipo-estabelecimento.repository";

@Injectable()
export class PrismaTipoEstabelecimentoRepository implements TipoEstabelecimentoRepository {
    constructor(private readonly prisma: PrismaService) { }
    
}