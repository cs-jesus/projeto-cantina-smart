import { Prisma } from "@prisma/client";


export class CategoriaProduto implements Prisma.CategoriaProdutoCreateInput {
    
    descricao: string;
    estoque?: Prisma.ProdutoFilialCreateNestedManyWithoutCategoriaProdutoInput;
}
