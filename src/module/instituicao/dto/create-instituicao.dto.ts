import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

export class CreateInstituicaoDto extends Instituicao{
    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    nome: string;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsOptional()
    sigla?: string | null;
}