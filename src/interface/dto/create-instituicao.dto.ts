import { IsNotEmpty, IsString, Validate, IsOptional, Length, Matches, MaxLength } from "class-validator";

const nomeMinLenght = 3, nomeMaxLenght = 128;
const siglaMinLength = 2, siglaMaxLength = 10;

export class CreateInstituicaoDto {

    @IsNotEmpty({ message: "O campo 'Nome' não pode estar vazio." })
    @IsString({ message: "O dado para este campo deve ser do tipo 'string'. " })
    @Length(nomeMinLenght, nomeMaxLenght, { message: "O campo deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres." })
    @Matches(/^(?!.* {2})[A-Za-zÀ-ú]+(?: [A-Za-zÀ-ú]+)*$/, {
        message: "O campo 'Nome' deve ter apenas caracteres alfabéticos e espaços únicos entre palavras."
    })
    nome: string;

    @IsOptional()
    @IsString({ message: "O dado para este campo deve ser do tipo 'string'. " })
    @Matches(/^[A-Za-zÀ-ú]*$/, { message: "O campo 'Sigla' deve conter somente letras ou estar vazio." })
    @MaxLength(siglaMaxLength, { message: "Tamanho máximo deverá ser ${siglaMaxLenght}" })
    sigla?: string;

    @IsNotEmpty({ message: "O campo 'Tipo de Instituição' não pode estar vazio." })
    tipoInstituicaoId: number;
}
