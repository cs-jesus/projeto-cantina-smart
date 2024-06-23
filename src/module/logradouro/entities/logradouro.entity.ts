import { Prisma } from "@prisma/client";

export class Logradouro implements Prisma.LogradouroCreateInput {
    nome: string;

    enderecos?: Prisma.EnderecoUncheckedCreateNestedManyWithoutLogradouroInput;
}
