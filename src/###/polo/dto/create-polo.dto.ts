import { IsAlpha, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class InstituicaoConnectInput {
    @IsInt()
    id: number;
}

class EnderecoConnectInput {
    @IsInt()
    id: number;
}

const compMinLenght = 3, compMaxLenght = 32;
const nomeMinLenght = 3, nomeMaxLenght = 64;

export class CreatePoloDto {

    @IsString({ message: "O tipo de dado deve ser uma string" })
    @IsOptional()
    @Length(compMinLenght, compMaxLenght, { message: `O campo 'complemento' deve conter entre ${compMinLenght} e ${compMaxLenght} caracteres.` })
    @Matches(/^[A-Za-z0-9\s.,-]+$/, { message: "Caracteres aceitos: 'a-z', '0-9', '' " })
    complemento?: string;

    @IsString()
    @Length(nomeMinLenght, nomeMaxLenght, { message: `O campo 'complemento' deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres.` })
    @IsAlpha('pt-BR',)
    //Implementar validação de registro único - Deverá ser solucionado até o final da sprint 3
    nome: string;

    @ValidateNested()
    @Type(() => InstituicaoConnectInput)
    @IsNotEmpty({})
    instituicao: InstituicaoConnectInput;


    @ValidateNested()
    @Type(() => EnderecoConnectInput)
    @IsNotEmpty()
    endereco: EnderecoConnectInput;

}
