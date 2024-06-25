import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { UnidadeMedida } from "../entities/unidade-medida.entity";

export class CreateUnidadeMedidaDto extends UnidadeMedida {
    
        @IsString({ message: "O tipo de dado deve ser uma string" })
        @IsNotEmpty({ message: "O campo não pode estar vazio" })
        descricao: string;


}
