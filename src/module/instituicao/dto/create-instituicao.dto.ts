import { IsAlpha, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

const siglaMinLenght = 2, siglaMaxLenght = 10;
const nomeMinL = 3, nomeMaxL = 128;

export class CreateInstituicaoDto extends Instituicao {

    @IsNotEmpty({ message: 'O campo \'nome\' não pode estar vazio' })
    @IsString({ message: 'O campo \'nome\' deve ser uma string' })
    @Length(nomeMinL, nomeMaxL, { message: `O campo 'sigla' deve conter entre ${nomeMinL} e ${nomeMaxL} caracteres.` })
    @Matches(/^[A-Za-zÀ-úaâãeêiíoôõuüç\s]+$/, { message: 'O nome deve conter apenas caracteres alfabéticos e espaços', })
    nome: string;

    @IsString({ message: 'O campo \'sigla\' deve ser uma string' })
    @IsOptional()
    @Length(siglaMinLenght, siglaMaxLenght, { message: `O campo 'sigla' deve conter entre ${siglaMinLenght} e ${siglaMaxLenght} caracteres.` })
    @IsAlpha("pt-BR", { message: "Xablau" })
    sigla?: string | null;

    @IsInt({ message: 'O campo \'fk_tipo\' deve ser um número inteiro' })
    @IsNotEmpty({ message: 'O campo \'fk_tipo\' não pode estar vazio' })
    fk_tipo: number;
}