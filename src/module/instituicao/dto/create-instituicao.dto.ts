import { IsInt, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

const siglaMinLenght = 2, siglaMaxLenght = 10;
const nomeMinL = 3, nomeMaxL = 128;

export class CreateInstituicaoDto extends Instituicao {

    @IsNotEmpty({ message: 'O campo \'nome\' não pode estar vazio' })
    @IsString({ message: 'O campo \'nome\' deve ser uma string' })
    @Length(nomeMinL, nomeMaxL, { message: `O campo 'sigla' deve conter entre ${nomeMinL} e ${nomeMaxL} caracteres.` })
    nome: string;

    @IsString({ message: 'O campo \'sigla\' deve ser uma string' })
    @IsOptional()
    @Length(siglaMinLenght, siglaMaxLenght, { message: `O campo 'sigla' deve conter entre ${siglaMinLenght} e ${siglaMaxLenght} caracteres.` })
    sigla?: string | null;

    @IsInt({ message: 'O campo \'fk_tipo\' deve ser um número inteiro' })
    @IsNotEmpty({ message: 'O campo \'fk_tipo\' não pode estar vazio' })
    //@Validate(TipoInstituicaoExists, { message: 'O valor do campo \'fk_tipo\' deve corresponder a um tipo de instituição existente' })
    fk_tipo: number;
}