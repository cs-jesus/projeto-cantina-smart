import { TipoInstituicao } from "../entities/tipo-instituicao.entity";
import { IsString } from "class-validator";

export class CreateTipoInstituicaoDto extends TipoInstituicao {
    @IsString()
    descricao: string;
}
