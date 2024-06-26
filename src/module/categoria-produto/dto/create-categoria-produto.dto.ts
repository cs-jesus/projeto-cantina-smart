import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { CategoriaProduto } from "../entities/categoria-produto.entity";

export class CreateCategoriaProdutoDto extends CategoriaProduto{
    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    descricao: string;

}
