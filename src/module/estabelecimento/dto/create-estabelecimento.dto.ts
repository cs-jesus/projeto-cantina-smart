import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";
import { Estabelecimento } from "../entities/estabelecimento.entity";

export class CreateEstabelecimentoDto extends Estabelecimento {

     
    @IsString({message: 'o dado recebido dever ser uma string'})
    @IsNotEmpty({message: 'O campo não pode estar vazio'})
    @IsDate({message: 'o dado recebido deve ser uma DATA'})
    @IsNotEmpty({message: 'O campo não pode estar vazio, insita a data do registro'})
    registro: string | Date;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @Matches(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/, { message: 'Formato de telefone inválido' })
    telefone?: string;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @Matches(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/, { message: 'Formato de telefone inválido' })
    celular: string;

    @IsNumber({}, { message: 'O dado recebido deve ser um número' })
    @IsNotEmpty({message: ' O campo não pode estar vazio'})
    limite?: number;

    @IsNumber({}, { message: 'O dado recebido deve ser um número' })
    @IsNotEmpty({message: ' O campo não pode estar vazio'})
    filiais?;
    //deixei a validação como number para tratar as filiais como "001, 002, 003 " e assim por diante. 

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    assocProprietario?;

    @IsBoolean({ message: 'O campo deve ser um booleano' })
    @IsOptional() 
    fisica?;

    @IsBoolean({ message: 'O campo deve ser um booleano' })
    @IsOptional()
    juridica?;

    @IsBoolean({ message: 'O campo deve ser booleano' })
    @IsOptional()
    tipoJuridico;
}
//deixei de forma booleano para ser true ou false, como vamos ter 3 tipos de verificação, achei que seria o melhor a se fazer