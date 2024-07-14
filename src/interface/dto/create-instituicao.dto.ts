import { IsNotEmpty, IsString, IsNumber, Validate, IsOptional } from "class-validator";
import { DataTypeTipoInstituicaoIdValidator } from "src/application/validators/instituicao/data-type-tipo-Instituicao-id.validator";
import { ExistsTipoInstituicaoValidator } from "src/application/validators/instituicao/exists-tipo-instituicao.validator";

export class CreateInstituicaoDto {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    sigla?: string;

    @IsNotEmpty({ message: 'O tipo deve ser fornecido.' })
    //@Validate(ExistsTipoInstituicaoValidator)
    //@Validate(DataTypeTipoInstituicaoIdValidator)
    tipoInstituicaoId: number;
}
