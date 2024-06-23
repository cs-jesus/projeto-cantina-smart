import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { TipoInstituicao } from "../entities/tipo-instituicao.entity";

export class CreateTipoInstituicaoDto extends TipoInstituicao {
    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    descricao: string;
}