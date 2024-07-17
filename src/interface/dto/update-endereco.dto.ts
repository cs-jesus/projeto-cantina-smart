import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEnderecoDto {
    @IsNotEmpty()
    @IsString()
    logradouroNome: string;

    @IsNotEmpty()
    @IsString()
    bairroNome: string;

    @IsNotEmpty()
    @IsString()
    cidadeNome: string;

    @IsNotEmpty()
    @IsString()
    estadoUf: string;

    @IsNotEmpty()
    @IsString()
    cep: string;

    @IsNotEmpty()
    @IsString()
    numero: string;
}
