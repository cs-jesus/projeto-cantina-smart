import { TipoInstituicao } from './tipo-instituicao.entity';

export class Instituicao {
    constructor(
        public readonly fk_tipo: number,
        public readonly nome: string,
        public readonly sigla?: string,
        public readonly id?: number,
        public readonly tipoInstituicao?: TipoInstituicao,
    ) { }
}
