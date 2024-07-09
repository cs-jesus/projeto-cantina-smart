import { IsAlpha, IsNotEmpty, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

const siglaMinLenght = 2, siglaMaxLenght = 10;
const nomeMinLenght = 3, nomeMaxLenght = 128;

class TipoInstituicaoConnectInput {
    @IsNotEmpty({ message: 'O campo \'id\' de tipoInstituicao não pode estar vazio' })
    id: number;
}

export class CreateInstituicaoDto {

    // Validação para controle interno do sistema    
    @IsString({ message: 'O campo \'nome\' deve ser uma string' })
    // Validação para controle de dados externos
    @Length(nomeMinLenght, nomeMaxLenght, { message: `O campo 'sigla' deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres.` })
    @Matches(/^[A-Za-zÀ-úaâãeêiíoôõuüç\s]+$/, { message: 'O nome deve conter apenas caracteres alfabéticos e espaços', })
    //Implementar validação de registro único - Deverá ser solucionado até o final da sprint 3
    nome: string;

    // Validação para controle interno do sistema
    @IsString({ message: 'O campo \'sigla\' deve ser uma string' })
    // Validação para controle de dados externos
    @IsOptional()
    @Length(siglaMinLenght, siglaMaxLenght, { message: `O campo 'sigla' deve conter entre ${siglaMinLenght} e ${siglaMaxLenght} caracteres.` })
    @IsAlpha("pt-BR", { message: "Xablau" })
    sigla?: string | null;

    // Validação para controle interno do sistema
    @ValidateNested()
    @Type(() => TipoInstituicaoConnectInput)
    @IsNotEmpty({ message: 'O campo \'tipoInstituicao\' não pode estar vazio' })
    tipoInstituicao: TipoInstituicaoConnectInput;
}
