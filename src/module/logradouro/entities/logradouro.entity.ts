import { Prisma } from "@prisma/client";

export class Logradouro implements Prisma.LogradouroCreateInput {

    //Definição de atributo básico
    nome: string;

    //Declara que a entidade será refereciada como chave estrangeira
    enderecos?: Prisma.EnderecoUncheckedCreateNestedManyWithoutLogradouroInput;
}
