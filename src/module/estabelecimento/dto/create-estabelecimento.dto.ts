import { IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";
import { Estabelecimento } from "../entities/estabelecimento.entity";

export class CreateEstabelecimentoDto extends Estabelecimento {

    /*
    @IsString({message: 'o dado recebido dever ser uma string'})
    Ajustado a entidade Estabelecimento para receber somente dados do tipo date para evitar inconsistências.
    */
    @IsDate({ message: 'o dado recebido deve ser uma DATA' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    registro: Date;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    //@IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsOptional()
    //@Matches(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/, { message: 'Formato de telefone inválido' }) => mesmo princípio do CPF, telefone fixo com restrição de formatação
    @Matches(/^\d{10}$/, { message: "O telefone fixo deve conter exatamente 10 digitos." })
    telefone?: string;

    @IsString({ message: 'O dado recebido deve ser uma string' })
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    //@Matches(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/, { message: 'Formato de telefone inválido' })
    // Validar celular conforme exemplo acima, lembrando que o celular pode ter 10 ou 11 digitos
    celular: string;

    @IsInt({ message: 'O dado recebido deve ser um número' }) //Alterado para restrição especifica de inteiro para evitar inconsistência
    @IsOptional() //Alterado para a conformidade do tipo limite? onde permite a inserção de valor nulo
    limite?: number;

    /*
    //@IsBoolean({ message: 'O campo deve ser um booleano' })
    @IsInt()
    @IsOptional()
    fisica?;

    //@IsBoolean({ message: 'O campo deve ser um booleano' })
    @IsInt()
    @IsOptional()
    juridica?;

    //@IsBoolean({ message: 'O campo deve ser booleano' })
    @IsInt()
    @IsNotEmpty()
    tipoJuridico;
    */
}
//deixei de forma booleano para ser true ou false, como vamos ter 3 tipos de verificação, achei que seria o melhor a se fazer
// Por se tratar de entidade que armazena valores como chave estrangeira, seguir o padrão definido no create-endereco.dto.ts

//Lembrete para o futuro: Criar estrutura condicional que determina a seleção 