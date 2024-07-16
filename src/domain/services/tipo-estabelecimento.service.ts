import { Injectable, Inject } from "@nestjs/common";

import { TipoEstabelecimentoRepository } from '../repositories/tipo-estabelecimento.repository';
import { TipoEstabelecimento } from '../entities/tipo-estabelecimento.entity';

@Injectable()
export class TipoEstabelecimentoService {
    constructor(
        @Inject('TipoEstabelecimentoRepository')
        private readonly tipoEstabelecimentoRepository: TipoEstabelecimentoRepository
    ) { }

}