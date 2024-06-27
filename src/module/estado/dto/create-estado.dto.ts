import { IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Estado } from "../entities/estado.entity";

const ufMinLenght = 2, ufMaxLenght = 2;

export class CreateEstadoDto extends Estado {

    @IsString()
    @IsNotEmpty()
    @Length(ufMinLenght, ufMaxLenght, { message: `O campo 'nome' deve conter entre ${ufMinLenght} e ${ufMaxLenght} caracteres.` })
    @Matches(/^[A-Z]/, { message: "O nome deve conter apenas letras, números, espaços, pontos e vírgulas" })
    //Implementar validação de registro único
    uf: string;
}
