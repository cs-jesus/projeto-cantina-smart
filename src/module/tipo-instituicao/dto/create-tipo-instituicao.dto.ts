import { IsAlpha, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { TipoInstituicao } from "../entities/tipo-instituicao.entity";

const minL = 3, maxL = 32;

export class CreateTipoInstituicaoDto extends TipoInstituicao {
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado deve ser uma string" })
    @Length(minL, maxL, { message: `O campo deve conter entre ${minL} e ${maxL} caracteres.` })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
    descricao: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado deve ser uma string" })
    @Length(minL, maxL, { message: `O campo deve conter entre ${minL} e ${maxL} caracteres.` })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
    algumacoisa: string;
}
