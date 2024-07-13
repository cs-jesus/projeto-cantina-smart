import { IsNotEmpty, IsString } from "class-validator";

export class CreateLogradouroDto{
    @IsString()
    @IsNotEmpty()
    nome: string;
}