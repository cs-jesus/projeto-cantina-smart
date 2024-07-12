import { Prisma } from "@prisma/client";

export class ProdutoFilial implements Prisma.ProdutoFilialCreateInput {
    //Definição de atributo básico
    fk_filial: number;
    fk_produto: number;
    fk_categoria_produto: number;
    fk_unidade_medida: number;
    descricao: string;
    perecivel: boolean;
    preco: number;
    quantidade_atual?: number;
    quantidade_minima?: number;
    quantidade_seguranca?: number;
    data_vencimento: Date;

    //Definição de chave estrangeira
    filial: Prisma.FilialCreateNestedOneWithoutEstoqueInput;
    produto: Prisma.ProdutoCreateNestedOneWithoutEstoqueInput;
    categoriaProduto: Prisma.CategoriaProdutoCreateNestedOneWithoutEstoqueInput;
    unidadeMedida: Prisma.UnidadeMedidaCreateNestedOneWithoutEstoqueInput;

}
