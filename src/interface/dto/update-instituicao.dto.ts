import { IsNotEmpty, IsString, IsNumber, IsOptional, Validate } from 'class-validator';


export class UpdateInstituicaoDto {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    sigla?: string;

    @IsNotEmpty({ message: 'O tipo deve ser fornecido.' })
    tipoInstituicaoId: number;
}
