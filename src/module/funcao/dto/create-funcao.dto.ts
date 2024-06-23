import { IsNotEmpty, IsString } from "class-validator";
import { Funcao } from "../entities/funcao.entity";

export class CreateFuncaoDto extends Funcao {
    @IsString({ message: 'O tipo de dado deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode ser nulo' })
    descricao: string;
}
