import { Prisma } from "@prisma/client"

export class Estado implements Prisma.EstadoCreateInput {
    uf: string;

    enderecos?: Prisma.EnderecoCreateNestedManyWithoutEstadoInput;
}