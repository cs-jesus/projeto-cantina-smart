import { IsAlpha, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

const siglaMinLenght = 2, siglaMaxLenght = 10;
const nomeMinLenght = 3, nomeMaxLenght = 128;

export class CreateInstituicaoDto extends Instituicao {

    // Validação para controle interno do sistema    
    @IsString({ message: 'O campo \'nome\' deve ser uma string' })
    // Validação para controle de dados externos
    @Length(nomeMinLenght, nomeMaxLenght, { message: `O campo 'sigla' deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres.` })
    @Matches(/^[A-Za-zÀ-úaâãeêiíoôõuüç\s]+$/, { message: 'O nome deve conter apenas caracteres alfabéticos e espaços', })
    nome: string;

    // Validação para controle interno do sistema
    @IsString({ message: 'O campo \'sigla\' deve ser uma string' })
    // Validação para controle de dados externos
    @IsOptional()
    @Length(siglaMinLenght, siglaMaxLenght, { message: `O campo 'sigla' deve conter entre ${siglaMinLenght} e ${siglaMaxLenght} caracteres.` })
    @IsAlpha("pt-BR", { message: "Xablau" })
    sigla?: string | null;

    // Validação para controle interno do sistema
    @IsInt({ message: 'O campo \'fk_tipo\' deve ser um número inteiro' })
    // Validação para controle de dados externos
    @IsNotEmpty({ message: 'O campo \'fk_tipo\' não pode estar vazio' })
    fk_tipo: number;
}