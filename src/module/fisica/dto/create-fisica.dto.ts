import { IsEmail, IsInt, IsNotEmpty, IsString, Matches } from "class-validator";
import { Fisica } from "../entities/fisica.entity";

//const CPF_REGEX = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;

export class CreateFisicaDto extends Fisica {
    @IsNotEmpty({ message: "O campo não pode estar vazio, Insira seu CPF" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches(CPF_REGEX, { message: "CPF inválido" })
    //Validar CPF único
    cpf: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches() Implementar restrição de caracteres - Alfabéticas + espaço
    //@Lenght() Implementar mínimo e máximo de caracteres 
    nome: string;

    @IsEmail()
    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o seu e-mail" })
    //@Lenght() Implementar mínimo e máximo de caracteres]
    //Validar email único
    email: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Lenght() Implementar mínimo e máximo de caracteres]
    //Validar restrições de segurança
    senha: string;

}
