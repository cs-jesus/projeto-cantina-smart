import { Logradouro } from './logradouro.entity';
import { Bairro } from './bairro.entity';
import { Cidade } from './cidade.entity';
import { Estado } from './estado.entity';


export class Endereco {
    constructor(
        public readonly fk_logradouro: number,
        public readonly fk_bairro: number,
        public readonly fk_cidade: number,
        public readonly fk_estado: number,
        public readonly cep: string,
        public readonly numero: string,
        public readonly id?: number,
        public readonly logradouro?: Logradouro,
        public readonly bairro?: Bairro,
        public readonly cidade?: Cidade,
        public readonly estado?: Estado,
    ) { }
}
