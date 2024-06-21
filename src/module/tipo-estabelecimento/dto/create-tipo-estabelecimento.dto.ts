import { IsNotEmpty, IsString } from "class-validator";
import { TipoEstabelecimento } from "../entities/tipo-estabelecimento.entity";

export class CreateTipoEstabelecimentoDto extends TipoEstabelecimento {
    
    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    descricao: string;
}
