import { MinLength, MaxLength IsEmail, IsInt, IsNotEmpty, IsString, Matches } from "class-validator";
import { Fisica } from "../entities/fisica.entity";

//const CPF_REGEX = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;

export class CreateFisicaDto extends Fisica {
    @IsNotEmpty({ message: "O campo não pode estar vazio, Insira seu CPF" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches(CPF_REGEX, { message: "CPF inválido" }) - Deverá ser solucionado até o final da sprint 3
    //Validar CPF único - Deverá ser solucionado até o final da sprint 3
    cpf: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, { message: "O campo deve conter apenas caracteres alfabéticos e espaços" })
    //@Matches() Feito
    //@Lenght() Implementar mínimo e máximo de caracteres 
    nome: string;

    @IsEmail()
    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o seu e-mail" })
    @MinLength(5, { message: "O campo deve ter pelo menos 5 caracteres" }) 
    @MaxLength(50, { message: "O campo deve ter no máximo 50 caracteres" })
    //@Lenght()feito
    //Validar email único - Deverá ser solucionado até o final da sprint 3
    email: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    @MinLength(5, { message: "O campo deve ter pelo menos 5 caracteres" }) 
    @MaxLength(50, { message: "O campo deve ter no máximo 50 caracteres" })
    //@Lenght() feito
    //Validar restrições de segurança
    senha: string;

}
