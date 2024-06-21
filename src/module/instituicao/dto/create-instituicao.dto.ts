import { IsString } from "class-validator";
import { Instituicao } from "../entities/instituicao.entity";

export class CreateInstituicaoDto extends Instituicao{
    @IsString()
    nome: string;

    @IsString()
    sigla: string;
}
