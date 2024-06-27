import { IsAlpha, IsNotEmpty, IsString, Length } from "class-validator";
import { CategoriaProduto } from "../entities/categoria-produto.entity";
import { descricaoMinLenght, descricaoMaxLenght } from "./create-categoria-produto.dto";


export class CreateCategoriaProdutoDto extends CategoriaProduto {

    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @Length(descricaoMinLenght, descricaoMaxLenght, { message: "O campo deve conter entre ${descricaoMinLenght} e ${descricaoMaxLenght} caracteres." })
    @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
    descricao: string;
}
