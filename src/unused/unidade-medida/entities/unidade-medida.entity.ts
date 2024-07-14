import { Prisma } from "@prisma/client";

export class UnidadeMedida implements Prisma.UnidadeMedidaCreateInput {

    //Definição de atributo básico
    nome: string;
    sigla: string;

    //Declara que a entidade será refereciada como chave estrangeira
    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutUnidadeMedidaInput;
}
