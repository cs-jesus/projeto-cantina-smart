import { Prisma } from "@prisma/client"

export class Cidade implements Prisma.CidadeCreateInput {
    nome: string;

    enderecos?: Prisma.EnderecoCreateNestedManyWithoutCidadeInput;
}