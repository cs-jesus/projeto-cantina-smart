import { IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Logradouro } from "../entities/logradouro.entity";

const nomeMinLenght = 3, nomeMaxLenght = 128;

export class CreateLogradouroDto extends Logradouro {

    @IsString()
    @IsNotEmpty()
    @Length(nomeMinLenght, nomeMaxLenght, { message: `O campo 'nome' deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres.` })
    @Matches(/^[\p{L}0-9\s.,-]+$/u, { message: "O nome deve conter apenas letras, números, espaços, pontos e vírgulas" })
    //Implementar validação de registro único - Deverá ser solucionado até o final da sprint 3
    nome: string
}
