import { Prisma } from "@prisma/client";


export class Produto implements Prisma.ProdutoCreateInput {

    //Definição de atributo básico
    nome: string;

    //Declara que a entidade será refereciada como chave estrangeira
    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutProdutoInput;
}
