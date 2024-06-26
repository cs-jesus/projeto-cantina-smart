import { Prisma } from "@prisma/client";

export class UnidadeMedida implements Prisma.UnidadeMedidaCreateInput {
    nome: string;
    sigla: string;

    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutUnidadeMedidaInput;
}
