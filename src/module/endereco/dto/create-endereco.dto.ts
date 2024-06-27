import { IsInt, IsNotEmpty, IsString, Length, Matches, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class LogradoudoConnectInput {
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class BairroConnectInput {
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class CidadeConnectInput {
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

class EstadoConnectInput {
    @IsInt({ message: "O campo 'id' deve ser um número inteiro" })
    id: number;
}

export class CreateEnderecoDto {

    @IsString()
    @Matches(/^[0-9]{8}$/, { message: "O campo 'cep' deve conter exatamente 8 dígitos numéricos" })
    cep: string;

    @IsString()
    @Matches(/^[0-9]{1,10}$/, { message: "O campo 'numero' deve conter entre 1 e 10 dígitos numéricos" })
    numero: string;

    //Implementar validação de registro único de CEP + número

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
