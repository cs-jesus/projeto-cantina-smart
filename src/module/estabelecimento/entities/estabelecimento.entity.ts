import { Prisma } from "@prisma/client";

export class Estabelecimento implements Prisma.EstabelecimentoCreateInput {

    //Definição de atributo básico
    fk_tipoJuridico: number;
    fk_fisica?: number;
    fk_juridica?: number;
    registro: Date;
    telefone?: string;
    celular: string;
    limite?: number;

    //Definição de chave estrangeira
    tipoJuridico: Prisma.TipoJuridicoCreateNestedOneWithoutEstabelecimentosInput;
    fisica?: Prisma.FisicaCreateNestedOneWithoutEstabelecimentosInput;
    juridica?: Prisma.JuridicaCreateNestedOneWithoutEstabelecimentosInput;

    //Declara que a entidade será refereciada como chave estrangeira
    filiais?: Prisma.FilialUncheckedCreateNestedManyWithoutEstabelecimentoInput;
    assocProprietario?: Prisma.ProprietarioEstabelecimentoUncheckedCreateNestedManyWithoutEstabelecimentoInput;
}
