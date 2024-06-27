import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Juridica } from "../entities/juridica.entity";

// Expressão regular para validar CNPJ
//const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

export class CreateJuridicaDto extends Juridica {
    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o CNPJ" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches(CNPJ_REGEX, { message: "CNPJ inválido" })
    cnpj: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches() Implementar restrição de caracteres - Alfabéticas + espaço
    //@Lenght() Implementar mínimo e máximo de caracteres
    social: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches() Implementar restrição de caracteres - Alfabéticas + espaço
    //@Lenght() Implementar mínimo e máximo de caracteres
    fantasia: string;

    @IsEmail()
    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o seu e-mail" })
    //@Lenght() Implementar mínimo e máximo de caracteres
    email: string;
}