import { IsInt, IsNotEmpty, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class LogradoudoConnectInput { //Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class BairroConnectInput { //Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class CidadeConnectInput { //Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class EstadoConnectInput { //Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

export class CreateEnderecoDto {

    //Implementa as validações de atributos simples, note que não é realizado validação de fk nesse bloco.

    @IsString()
    @Matches(/^[0-9]{8}$/, { message: "O campo 'cep' deve conter exatamente 8 dígitos numéricos" })
    cep: string;

    @IsString()
    @Matches(/^[0-9]{1,10}$/, { message: "O campo 'numero' deve conter entre 1 e 10 dígitos numéricos" })
    numero: string;

    //Implementar validação de registro único de CEP + número


    //Implementa validação e restrição dos atributos definidos como chave estrangeira

    @ValidateNested()
    @Type(() => LogradoudoConnectInput)
    @IsNotEmpty({})
    logradouro: LogradoudoConnectInput;

    @ValidateNested()
    @Type(() => BairroConnectInput)
    @IsNotEmpty({})
    bairro: BairroConnectInput;

    @ValidateNested()
    @Type(() => CidadeConnectInput)
    @IsNotEmpty({})
    cidade: CidadeConnectInput;

    @ValidateNested()
    @Type(() => EstadoConnectInput)
    @IsNotEmpty({})
    estado: EstadoConnectInput;
}
