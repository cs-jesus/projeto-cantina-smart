import { IsNotEmpty, IsString } from "class-validator";
import { Logradouro } from "../entities/logradouro.entity";

export class CreateLogradouroDto extends Logradouro {

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar em branco' })
    nome: string;
}
