import { IsNumber, IsEmail, IsInt, IsNotEmpty, IsString, Matches, isNumber, IsDate } from "class-validator";
import { Filial } from "../entities/filial.entity";

export class CreateFilialDto extends Filial {

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    nome: string;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    complemento?: string;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsDate({ message: 'o dado recebido deve ser uma DATA' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio, insita a data do registro' })
    registro: string | Date;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsNumber({}, { message: 'O dado recebido deve ser um número' })
    assocFuncionario?;
    //com relação a assocFuncionario, teria que ver como vai ser relacionado o funcionário, deixar a validação como number para tratar as filiais como "001, 002, 003 " e assim por diante. 

    @IsInt({ message: 'O dado recebido dever um número' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio, necessita de um valor númerico' })
    estoque?;


    @IsInt({ message: 'O dado recebido dever um número' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio, necessita de um valor númerico' })
    estabelecimento;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    polo;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    endereco?;

}