import { Prisma } from "@prisma/client";

export class Estabelecimento implements Prisma.EstabelecimentoCreateInput {
    //Definição dos atributos básicos
    registro: Date;
    telefone?: string;
    celular: string;
    limite?: number;

    //Definição das chaves estrangeiras
    tipoJuridico: Prisma.TipoJuridicoCreateNestedOneWithoutEstabelecimentosInput;
    fisica?: Prisma.FisicaCreateNestedOneWithoutEstabelecimentosInput;
    juridica?: Prisma.JuridicaCreateNestedOneWithoutEstabelecimentosInput;

    //Declara que a entidade será refereciada como chave estrangeira
    filiais?: Prisma.FilialUncheckedCreateNestedManyWithoutEstabelecimentoInput;
    assocProprietario?: Prisma.ProprietarioEstabelecimentoUncheckedCreateNestedManyWithoutEstabelecimentoInput;
}
