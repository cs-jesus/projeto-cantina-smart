import { Prisma } from "@prisma/client";

export class Funcao implements Prisma.FuncaoCreateInput {
    descricao: string;

    colaboradores?: Prisma.ColaboradorCreateNestedManyWithoutFuncaoInput;
}
