import { Prisma } from "@prisma/client";

export class Filial implements Prisma.FilialCreateInput {

    //Definição de atributo básico
    fk_estabelecimento: number;
    fk_polo: number;
    fk_endereco?: number;
    complemento?: string;
    nome: string;
    registro: Date;

    //Definição de chave estrangeira
    estabelecimento: Prisma.EstabelecimentoCreateNestedOneWithoutFiliaisInput;
    polo: Prisma.PoloCreateNestedOneWithoutFiliaisInput;
    endereco?: Prisma.EnderecoCreateNestedOneWithoutFiliaisInput;

    //Declara que a entidade será refereciada como chave estrangeira
    assocFuncionario?: Prisma.FuncionarioFilialUncheckedCreateNestedManyWithoutFilialInput;
    estoque?: Prisma.ProdutoFilialUncheckedCreateNestedManyWithoutFilialInput;
}