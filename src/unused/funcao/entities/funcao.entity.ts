import { Prisma } from "@prisma/client";

export class Funcao implements Prisma.FuncaoCreateInput {

    //Definição de atributo básico
    descricao: string;

    //Declara que a entidade será refereciada como chave estrangeira
    colaboradores?: Prisma.ColaboradorUncheckedCreateNestedManyWithoutFuncaoInput;
}
