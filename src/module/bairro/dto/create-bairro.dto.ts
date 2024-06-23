import { IsNotEmpty, IsString } from "class-validator";
import { Bairro } from "../entities/bairro.entity";

export class CreateBairroDto extends Bairro {

    @IsString()
    @IsNotEmpty()
    nome: string
}
