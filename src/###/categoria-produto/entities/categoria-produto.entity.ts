import { Prisma } from "@prisma/client";


export class CategoriaProduto implements Prisma.CategoriaProdutoCreateInput {

    //Definição de atributo básico
    descricao: string;

    //Declara que a entidade será refereciada como chave estrangeira
    estoque?: Prisma.ProdutoFilialCreateNestedManyWithoutCategoriaProdutoInput;
}
