import { Prisma } from "@prisma/client"

export class Bairro implements Prisma.BairroCreateInput {
    nome: string;

    enderecos?: Prisma.EnderecoCreateNestedManyWithoutBairroInput;
}
