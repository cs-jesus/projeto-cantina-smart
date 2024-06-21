import { IsOptional, IsString } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

export class CreateInstituicaoDto extends Instituicao{
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    sigla: string;
}
