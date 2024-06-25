import { Prisma } from "@prisma/client";


export class Produto implements Prisma.ProdutoCreateInput {

    descricao: string;

    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutProdutoInput;

    
}
