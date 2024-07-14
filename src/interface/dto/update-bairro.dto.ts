import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBairroDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
}
