import { MaxLength,MinLength,IsEmail, IsInt, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Juridica } from "../entities/juridica.entity";

// Expressão regular para validar CNPJ
//const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

export class CreateJuridicaDto extends Juridica {

    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o CNPJ" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    //@Matches(CNPJ_REGEX, { message: "CNPJ inválido" }) - Deverá ser solucionado até o final da sprint 3
    //Validar CNPJ único - Deverá ser solucionado até o final da sprint 3
    cnpj: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    @MinLength(5, { message: "O campo deve ter pelo menos 5 caracteres" }) 
    @MaxLength(50, { message: "O campo deve ter no máximo 50 caracteres" }) 
    @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, { message: "O campo deve conter apenas caracteres alfabéticos e espaços" })
    //@Matches() feito
    //@Lenght() feito
    social: string;

    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    @MinLength(5, { message: "O campo deve ter pelo menos 5 caracteres" }) 
    @MaxLength(50, { message: "O campo deve ter no máximo 50 caracteres" }) 
    @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, { message: "O campo deve conter apenas caracteres alfabéticos e espaços" })
    //@Matches() feito
    //@Lenght() feito
    fantasia: string;

    @IsEmail()
    @IsNotEmpty({ message: "O campo não pode estar vazio, insira o seu e-mail" })
    @MinLength(5, { message: "O campo deve ter pelo menos 5 caracteres" }) 
    @MaxLength(50, { message: "O campo deve ter no máximo 50 caracteres" }) 
    @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, { message: "O campo deve conter apenas caracteres alfabéticos e espaços" })
    //@Lenght() feito
    //Validar email único - Deverá ser solucionado até o final da sprint 3
    email: string;
}