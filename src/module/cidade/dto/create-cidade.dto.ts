import { IsNotEmpty, IsString } from "class-validator";
import { Cidade } from "../entities/cidade.entity";

export class CreateCidadeDto extends Cidade {

    @IsString()
    @IsNotEmpty({ message: "O campo nao pode estar vazio" })
    nome: string
}
