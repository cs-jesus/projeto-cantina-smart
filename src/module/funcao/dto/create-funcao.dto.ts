import { IsAlpha, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Funcao } from "../entities/funcao.entity";

const nomeMinLenght = 4, nomeMaxLenght = 32;

export class CreateFuncaoDto extends Funcao {
    @IsString({ message: 'O tipo de dado deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode ser nulo' })
    @Matches(/^[A-Za-zÀ-úaâãeêiíoôõuüç\s]+$/, { message: 'O nome deve conter apenas caracteres alfabéticos e espaços', })
    @Length(nomeMinLenght, nomeMaxLenght, { message: "O campo descricao deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres." })
    @IsAlpha('pt-BR', {})
    descricao: string;
}