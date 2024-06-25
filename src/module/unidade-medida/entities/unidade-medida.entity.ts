import { Prisma } from "@prisma/client";

export class UnidadeMedida implements Prisma.UnidadeMedidacreatinput {
    descricao: string;

    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutUnidadeMedidaInput;
}
    