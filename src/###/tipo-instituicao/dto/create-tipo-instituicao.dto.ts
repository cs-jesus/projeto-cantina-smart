import { IsAlpha, IsDecimal, IsString, Length } from "class-validator";
import { TipoInstituicao } from "../entities/tipo-instituicao.entity";

const descricaoMinLenght = 3, descricaoMaxLenght = 32;

export class CreateTipoInstituicaoDto extends TipoInstituicao {

    // Validação para controle interno do sistema
    @IsString({ message: "O tipo de dado deve ser uma string" })
    // Validação para controle de dados externos
    @Length(descricaoMinLenght, descricaoMaxLenght, { message: `O campo deve conter entre ${descricaoMinLenght} e ${descricaoMaxLenght} caracteres.` })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })

    //Implementar validação de registro único
    descricao: string;
}
