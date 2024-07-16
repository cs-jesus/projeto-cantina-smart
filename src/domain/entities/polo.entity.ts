import { Instituicao } from './instituicao.entity';
import { Endereco } from './endereco.entity';

export class Polo {
    constructor(
        public readonly fk_instituicao: number,
        public readonly fk_endereco: number,
        public readonly cep: string,
        public readonly numero: string,
        public readonly nome: string,
        public readonly complemento?: string,
        public readonly id?: number,
        public readonly instituicao?: Instituicao,
        public readonly endereco?: Endereco,

    ) { }
}
