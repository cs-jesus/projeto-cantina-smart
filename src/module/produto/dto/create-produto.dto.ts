import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Produto } from "../entities/produto.entity";

export class CreateProdutoDto extends Produto {
    
        @IsString({ message: "O tipo de dado deve ser uma string" })
        @IsNotEmpty({ message: "O campo não pode estar vazio" })
        nome: string;
}
