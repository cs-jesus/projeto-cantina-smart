import { IsInt, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Endereco } from "../entities/endereco.entity";
import { Prisma } from "@prisma/client";

export class CreateEnderecoDto extends Endereco {

    @IsString()
    @Matches(/^[0-9]{8}$/, { message: "O campo 'cep' deve conter exatamente 8 dígitos numéricos" })
    cep: string;

    @IsString()
    @Matches(/^[0-9]{1,10}$/, { message: "O campo 'numero' deve conter entre 1 e 10 dígitos numéricos" })
    numero: string;

    @IsInt({ message: "O campo 'logradouro' deve ser um número inteiro (id do logradouro)" })
    @IsNotEmpty({ message: "O campo 'logradouro' não pode estar vazio" })
    logradouro: Prisma.LogradouroCreateNestedOneWithoutEnderecosInput;

    @IsInt({ message: "O campo 'bairro' deve ser um número inteiro (id do bairro)" })
    @IsNotEmpty({ message: "O campo 'bairro' não pode estar vazio" })
    bairro: Prisma.BairroCreateNestedOneWithoutEnderecosInput;

    @IsInt({ message: "O campo 'cidade' deve ser um número inteiro (id da cidade)" })
    @IsNotEmpty({ message: "O campo 'cidade' não pode estar vazio" })
    cidade: Prisma.CidadeCreateNestedOneWithoutEnderecosInput;

    @IsInt({ message: "O campo 'estado' deve ser um número inteiro (id do estado)" })
    @IsNotEmpty({ message: "O campo 'estado' não pode estar vazio" })
    estado: Prisma.EstadoCreateNestedOneWithoutEnderecosInput;
}
