import { Prisma } from "@prisma/client"

export class Bairro implements Prisma.BairroCreateInput {

    //Definição de atributo básico
    nome: string;

    //Declara que a entidade será refereciada como chave estrangeira
    enderecos?: Prisma.EnderecoUncheckedCreateNestedManyWithoutBairroInput;
}
