import { IsNotEmpty, IsString } from "class-validator";

export class CreateBairroDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
}
