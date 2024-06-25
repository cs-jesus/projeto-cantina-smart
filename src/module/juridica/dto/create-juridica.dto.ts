import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Juridica } from "../entities/juridica.entity";

export class CreateJuridicaDto extends Juridica {
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsString({ message: "O tipo de dado dever ser uma string" })
    cnpj: string;
    social: string;
    fantasia: string;
    email: string;
}
