import { Prisma } from "@prisma/client";


export class Produto implements Prisma.ProdutoCreateInput {
    nome: string;

    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutProdutoInput;   
}
