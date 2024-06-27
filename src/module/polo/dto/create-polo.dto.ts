import { IsAlpha, IsNotEmpty, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Polo } from "../entities/polo.entity";
import { Prisma } from "@prisma/client";
import { Type } from "class-transformer";
import { Instituicao } from "src/module/instituicao/entities/instituicao.entity";

const compMinLenght = 3, compMaxLenght = 32;
const nomeMinLenght = 3, nomeMaxLenght = 64;

export class CreatePoloDto extends Polo {

    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsOptional()
    @Length(compMinLenght, compMaxLenght, { message: `O campo 'complemento' deve conter entre ${compMinLenght} e ${compMaxLenght} caracteres.` })
    @Matches(/^[A-Za-z0-9\s.,-]+$/, { message: "Caracteres aceitos: 'a-z', '0-9', '' " })
    complemento?: string;

    @IsString()
    @Length(nomeMinLenght, nomeMaxLenght, { message: `O campo 'complemento' deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres.` })
    @IsAlpha('pt-BR',)
    //Implementar validação de registro único
    nome: string;

    @ValidateNested()
    @Type(() => Instituicao)
    @IsNotEmpty()
    instituicao: Prisma.InstituicaoCreateNestedOneWithoutPolosInput;

    /*
    @ValidateNested()
    @Type(() => Endereco)
    @IsNotEmpty()
    endereco: Prisma.EnderecoCreateNestedOneWithoutPolosInput;
    */
}
