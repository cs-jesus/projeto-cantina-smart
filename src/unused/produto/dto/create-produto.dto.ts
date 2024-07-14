import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { Produto } from "../entities/produto.entity";

const nomeMinLenght = 3, nomeMaxLenght = 128;

export class CreateProdutoDto extends Produto {

        @IsString({ message: "O tipo de dado deve ser uma string" })
        @IsNotEmpty({ message: "O campo não pode estar vazio" })
        @Length(nomeMinLenght, nomeMaxLenght, { message: "O campo deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres." })
        //Validar caracteres

        //Implementar validação de registro único - Deverá ser solucionado até o final da sprint 3
        nome: string;
}