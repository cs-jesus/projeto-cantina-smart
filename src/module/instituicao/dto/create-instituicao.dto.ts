import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";
import { Prisma } from "@prisma/client";

export class CreateInstituicaoDto extends Instituicao {
    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    nome: string;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsOptional()
    sigla?: string | null;

    @IsInt({ message: 'O dado recebido deve ser um número inteiro' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio ' })
    fk_tipo: number;
}