import { IsAlpha, IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { CategoriaProduto } from "../entities/categoria-produto.entity";

const descricaoMinLenght = 3, descricaoMaxLenght = 64;

export class CreateCategoriaProdutoDto extends CategoriaProduto {

    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @Length(descricaoMinLenght, descricaoMaxLenght, { message: "O campo deve conter entre ${descricaoMinLenght} e ${descricaoMaxLenght} caracteres." })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
    //Implementar validação de registro único - Deverá ser solucionado até o final da sprint 3
    descricao: string;
}
