import { ArrayUnique, IsAlpha, IsNotEmpty, IsString, Length } from "class-validator";
import { TipoInstituicao } from "../entities/tipo-instituicao.entity";

const minLenght = 3, maxLenght = 32;

export class CreateTipoInstituicaoDto extends TipoInstituicao {

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado deve ser uma string" })
    @Length(minLenght, maxLenght, { message: `O campo deve conter entre ${minLenght} e ${maxLenght} caracteres.` })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
    descricao: string;
}
