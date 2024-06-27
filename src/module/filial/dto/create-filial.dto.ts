import { IsNumber, IsEmail, IsInt, IsNotEmpty, IsString, Matches, isNumber, IsDate } from "class-validator";
import { Filial } from "../entities/filial.entity";

export class CreateFilialDto extends Filial {

    @IsString({ message: 'o dado recebido dever ser uma string' })
    //@IsNotEmpty({ message: 'O campo não pode estar vazio' }) -> atributo com ? define campo opcional
    complemento?: string;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    //Implementar restrição de caracteres
    //Implementar restrição de tamanho
    nome: string;

    @IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsDate({ message: 'o dado recebido deve ser uma DATA' })
    registro: Date; //Alterado para receber apenas data
    /*
    
        Para implementação de validação de chaves estrangeiras, seguir padrão definido em create-endereco.dto e update-endereco.dto
    
        @IsInt({ message: 'O dado recebido dever um número' })
        @IsNotEmpty({ message: 'O campo não pode estar vazio, necessita de um valor númerico' })
        estabelecimento;
    
        @IsString({ message: 'o dado recebido dever ser uma string' })
        @IsNotEmpty({ message: 'O campo não pode estar vazio' })
        polo;
    
        @IsString({ message: 'o dado recebido dever ser uma string' })
        @IsNotEmpty({ message: 'O campo não pode estar vazio' })
        endereco?; -> Marcado com ? -> Opcional
    */


}
/*
@IsString({ message: 'o dado recebido dever ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsNumber({}, { message: 'O dado recebido deve ser um número' })
    assocFuncionario?;
    //com relação a assocFuncionario, teria que ver como vai ser relacionado o funcionário, deixar a validação como number para tratar as filiais como "001, 002, 003 " e assim por diante. 

    @IsInt({ message: 'O dado recebido dever um número' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio, necessita de um valor númerico' })
    estoque?;

    Comentário explicativo:

    Quando definimos que uma uma entidade será usada como chave estrangeira em outro local, marcamos a validação somente onde ela será chamada

*/