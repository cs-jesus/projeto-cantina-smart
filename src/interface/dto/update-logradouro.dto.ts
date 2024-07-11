import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLogradouroDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
}