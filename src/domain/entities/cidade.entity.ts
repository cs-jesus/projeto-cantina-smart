import { Prisma } from "@prisma/client"

export class Cidade implements Prisma.CidadeCreateInput {

    //Definição de atributo básico
    nome: string;

    //Declara que a entidade será refereciada como chave estrangeira
    enderecos?: Prisma.EnderecoUncheckedCreateNestedManyWithoutCidadeInput;
}
